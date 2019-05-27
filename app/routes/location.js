import express from 'express';
import LocationActions from '../actions/location';
import Helpers from '../helpers';
import LocationMiddleware from '../middlewares/locationMiddleware';

const locationRouter = express.Router({});

locationRouter
	.get('/location', LocationActions.getAllLocations)
	.get('/location/:locationId',
		LocationMiddleware.validate('getLocation'),
		Helpers.returnErrors,
		LocationActions.getLocation)
	.post('/location',
		LocationMiddleware.validate('createLocation'),
		Helpers.returnErrors,
		LocationActions.createLocation)
	.put('/location/:locationId',
		LocationMiddleware.validate('updateLocation'),
		Helpers.returnErrors,
		LocationActions.updateLocation)
	.delete('/location/:locationId',
		LocationMiddleware.validate('getLocation'),
		Helpers.returnErrors,
		LocationActions.deleteLocation);

export default locationRouter;
