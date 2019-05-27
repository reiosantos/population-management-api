module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		username: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.STRING
		},
		contact: {
			type: DataTypes.STRING
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {});
	User.associate = (models) => {
		// associations can be defined here
	};
	return User;
};
