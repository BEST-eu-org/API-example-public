/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Solver__types_ =  sequelize.define('best_helpdesk_Solver__types_', {
    types_: {
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
    Solver_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_Solver_',
        key: 'Solver_'
      }
    },
    RequestType_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_RequestType_',
        key: 'RequestType_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Solver__types_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "types_" },
        ]
      },
      {
        name: "types_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "types_" },
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
        name: "Solver_",
        using: "BTREE",
        fields: [
          { name: "Solver_" },
        ]
      },
      {
        name: "RequestType_",
        using: "BTREE",
        fields: [
          { name: "RequestType_" },
        ]
      },
    ]
  });
	best_helpdesk_Solver__types_.associate = models => {
		best_helpdesk_Solver__types_.belongsTo(models.best_helpdesk_Solver_, { foreignKey: "Solver_"});
		best_helpdesk_Solver__types_.belongsTo(models.best_helpdesk_RequestType_, { foreignKey: "RequestType_"});
	};
return best_helpdesk_Solver__types_


};
