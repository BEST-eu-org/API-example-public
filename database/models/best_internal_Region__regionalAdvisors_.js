/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Region__regionalAdvisors_ =  sequelize.define('best_internal_Region__regionalAdvisors_', {
    regionalAdvisors_: {
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
    regionalAdvisor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    fromDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Region_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Region_',
        key: 'Region_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_Region__regionalAdvisors_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regionalAdvisors_" },
        ]
      },
      {
        name: "regionalAdvisors_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regionalAdvisors_" },
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
        name: "regionalAdvisor_",
        using: "BTREE",
        fields: [
          { name: "regionalAdvisor_" },
        ]
      },
      {
        name: "fromDate_",
        using: "BTREE",
        fields: [
          { name: "fromDate_" },
        ]
      },
      {
        name: "toDate_",
        using: "BTREE",
        fields: [
          { name: "toDate_" },
        ]
      },
      {
        name: "Region_",
        using: "BTREE",
        fields: [
          { name: "Region_" },
        ]
      },
    ]
  });
	best_internal_Region__regionalAdvisors_.associate = models => {
		best_internal_Region__regionalAdvisors_.belongsTo(models.general_Person_, { foreignKey: "regionalAdvisor_"});
		best_internal_Region__regionalAdvisors_.belongsTo(models.best_internal_Region_, { foreignKey: "Region_"});
	};
return best_internal_Region__regionalAdvisors_


};
