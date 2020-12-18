/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_local_Event__companies_ =  sequelize.define('best_local_Event__companies_', {
    companies_: {
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
    Event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_local_Event_',
        key: 'Event_'
      }
    },
    Company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_local_Event__companies_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companies_" },
        ]
      },
      {
        name: "companies_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companies_" },
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
        name: "Event_",
        using: "BTREE",
        fields: [
          { name: "Event_" },
        ]
      },
      {
        name: "Company_",
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
    ]
  });
	best_local_Event__companies_.associate = models => {
		best_local_Event__companies_.belongsTo(models.best_local_Event_, { foreignKey: "Event_"});
		best_local_Event__companies_.belongsTo(models.general_company_Company_, { foreignKey: "Company_"});
	};
return best_local_Event__companies_


};
