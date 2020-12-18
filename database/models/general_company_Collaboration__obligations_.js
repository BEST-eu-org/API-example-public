/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_company_Collaboration__obligations_ =  sequelize.define('general_company_Collaboration__obligations_', {
    obligations_: {
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
    Collaboration_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Collaboration_',
        key: 'Collaboration_'
      }
    },
    company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    endDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_company_Collaboration__obligations_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obligations_" },
        ]
      },
      {
        name: "obligations_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "obligations_" },
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
        name: "Collaboration_",
        using: "BTREE",
        fields: [
          { name: "Collaboration_" },
        ]
      },
      {
        name: "company_",
        using: "BTREE",
        fields: [
          { name: "company_" },
        ]
      },
      {
        name: "endDate_",
        using: "BTREE",
        fields: [
          { name: "endDate_" },
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
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
    ]
  });
	general_company_Collaboration__obligations_.associate = models => {
		general_company_Collaboration__obligations_.belongsTo(models.general_company_Collaboration_, { foreignKey: "Collaboration_"});
		general_company_Collaboration__obligations_.belongsTo(models.general_company_Company_, { foreignKey: "company_"});
		general_company_Collaboration__obligations_.belongsTo(models.general_Person_, { foreignKey: "responsible_"});
	};
return general_company_Collaboration__obligations_


};
