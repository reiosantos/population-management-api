import { body, param } from 'express-validator/check';

class ValidatorHelper {
	static validateCreateLocation = () => [
		body('name', 'Location name is required').exists(),
		body('males').isNumeric(),
		body('females').isNumeric()
	];

	static validateUpdateLocation = () => [
		param('locationId', 'The Location ID provided is invalid').isUUID(),
		body('name', 'Location name is required').exists(),
		body('males').optional().isNumeric(),
		body('females').optional().isNumeric()
	]
}

class LocationMiddleware {
	static validate(method) {
		switch (method) {
			case 'createLocation':
				return ValidatorHelper.validateCreateLocation();
			case 'updateLocation':
				return ValidatorHelper.validateUpdateLocation();
			case 'getLocation':
				return [
					param('locationId', 'The Location ID provided is invalid').exists().isUUID()
				];
			default:
				return [];
		}
	}
}

export default LocationMiddleware;
