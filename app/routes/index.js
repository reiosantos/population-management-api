import * as express from 'express';
import { login, signup } from '../actions/auth';
import Helpers from '../helpers';
import UserMiddleware from '../middlewares/userMiddleware';
import auth from './auth';
import locationRouter from './location';
import userRouter from './users';

const apiPrefix = '/api/v1';

const router = express.Router();

const routes = (app) => {
	router
		.post(`${apiPrefix}/login`, auth.optional, login)
		.post(`${apiPrefix}/signup`,
			auth.optional,
			UserMiddleware.validate('createUser'),
			Helpers.returnErrors,
			signup)
		.use(apiPrefix, auth.required, auth.addUserData, userRouter)
		.use(apiPrefix, auth.required, auth.addUserData, locationRouter)

		.use((err, req, res, next) => {
			if (err.name === 'UnauthorizedError') {
				res.status(err.status)
					.send({ message: err.message });
				return;
			}
			next();
		});

	app.use(router);
	return app;
};

export default routes;
