import { LOCATION_MODAL } from '../constants';
import { hashPassword } from '../helpers/auth.helpers';
import DatabaseWrapper from '../models';

class LocationActions {
	static async getAllLocations(req, res) {
		try {
			const locations = await DatabaseWrapper.findAll(LOCATION_MODAL);

			return res.status(200).json({ records: locations });
		} catch (err) {
			return res.status(500).send({ message: err.message });
		}
	}

	static async getLocation(req, res) {
		const { locationId } = req.params;

		const location = await DatabaseWrapper.findOne(LOCATION_MODAL, { id: locationId });

		if (!location) {
			return res.status(404).json({ message: 'Location Not Found' });
		}
		return res.status(200).json({ record: location });
	}

	static async createLocation(req, res) {
		try {
			const { body } = req;
			const { name, males, females } = body;

			const resp = await DatabaseWrapper.createOne(LOCATION_MODAL, {
				name, males, females
			});
			return res.status(201).json({ record: resp });
		} catch (err) {
			if (err.name === 'SequelizeForeignKeyConstraintError') {
				return res.status(400).json({
					message: `Could not find the ${err.table} selected`
				});
			}
			return res.status(400).json({ message: err.message });
		}
	}

	static async updateLocation(req, res) {
		const { locationId } = req.params;
		const update = req.body;

		if (update.password && update.password.trim()) {
			update.password = await hashPassword(update.password);
		}

		try {
			const location = await DatabaseWrapper.updateOne(
				LOCATION_MODAL, { id: locationId }, update
			);

			return res.status(202).json({ record: location });
		} catch (err) {
			return res.status(400).json({ message: err.message });
		}
	}

	static async deleteLocation(req, res) {
		const { locationId } = req.params;

		const data = await DatabaseWrapper.deleteOne(LOCATION_MODAL, { id: locationId });

		if (data) return res.status(204).json({ message: data });

		return res.status(400).json({ message: 'Could not delete the requested record' });
	}
}

export default LocationActions;
