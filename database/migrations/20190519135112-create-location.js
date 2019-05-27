
module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('Locations', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4
		},
		name: {
			type: Sequelize.STRING
		},
		males: {
			allowNull: false,
			type: Sequelize.INTEGER
		},
		females: {
			allowNull: true,
			type: Sequelize.INTEGER
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE
		}
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('Locations')
};
