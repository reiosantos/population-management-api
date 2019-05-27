import models from '../../database/models';

const { User, Location } = models;

class ModelFactory {
	/**
	 * Creates a modal of Type `name`
	 * Returns the modal matching the name or null
	 *
	 * @param name
	 * @returns Sequelize.Sequelize.Model.
	 */
	static getModel = (name) => {
		if (!name) return null;
		const modelName = name.toLowerCase();

		if (modelName.match(/^users?$/)) return User;
		if (modelName.match(/^locations?$/)) return Location;

		return null;
	};
}

export default ModelFactory;
