
module.exports = (sequelize, DataTypes) => {
	const Location = sequelize.define('Location', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		males: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		females: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	}, {});
	Location.associate = (models) => {
		// associations can be defined here
	};
	return Location;
};
