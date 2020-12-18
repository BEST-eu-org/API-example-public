/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Company__changeLog_ =  sequelize.define('general_company_Company__changeLog_', {
    changeLog_: {
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
    Company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    changedOn_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    action_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changes_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_Company__changeLog_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "changeLog_" },
        ]
      },
      {
        name: "changeLog_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "changeLog_" },
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
        name: "Company_",
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
      {
        name: "changedOn_",
        using: "BTREE",
        fields: [
          { name: "changedOn_" },
        ]
      },
      {
        name: "changedBy_",
        using: "BTREE",
        fields: [
          { name: "changedBy_" },
        ]
      },
      {
        name: "responsible_",
        using: "BTREE",
        fields: [
          { name: "responsible_" },
        ]
      },
      {
        name: "action_",
        using: "BTREE",
        fields: [
          { name: "action_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
    ]
  });
	general_company_Company__changeLog_.associate = models => {
		general_company_Company__changeLog_.belongsTo(models.general_company_Company_, { foreignKey: "Company_"});
		general_company_Company__changeLog_.belongsTo(models.general_Person_, { foreignKey: "changedBy_"});
		general_company_Company__changeLog_.belongsTo(models.general_Person_, { foreignKey: "responsible_"});
	};
return general_company_Company__changeLog_


};
