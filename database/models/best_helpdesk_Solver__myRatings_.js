/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Solver__myRatings_ =  sequelize.define('best_helpdesk_Solver__myRatings_', {
    myRatings_: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TS_modify_: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    TS_create_: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    request_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Request_',
        key: 'Request_'
      }
    },
    rating_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    since_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Solver_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Solver__myRatings_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "myRatings_" },
        ]
      },
      {
        name: "myRatings_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "myRatings_" },
        ]
      },
      {
        name: "TS_modify_",
        using: "BTREE",
        fields: [
          { name: "TS_modify_" },
        ]
      },
      {
        name: "TS_create_",
        using: "BTREE",
        fields: [
          { name: "TS_create_" },
        ]
      },
      {
        name: "request_",
        using: "BTREE",
        fields: [
          { name: "request_" },
        ]
      },
      {
        name: "rating_",
        using: "BTREE",
        fields: [
          { name: "rating_" },
        ]
      },
      {
        name: "since_",
        using: "BTREE",
        fields: [
          { name: "since_" },
        ]
      },
      {
        name: "Solver_",
        using: "BTREE",
        fields: [
          { name: "Solver_" },
        ]
      },
    ]
  });
	best_helpdesk_Solver__myRatings_.associate = models => {
		best_helpdesk_Solver__myRatings_.belongsTo(models.best_helpdesk_Request_, { foreignKey: "request_"});
		best_helpdesk_Solver__myRatings_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "Solver_"});
	};
return best_helpdesk_Solver__myRatings_


};
