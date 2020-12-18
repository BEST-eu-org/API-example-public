/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Person__employment_ =  sequelize.define('general_Person__employment_', {
    employment_: {
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
    Person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
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
    department_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    position_: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    startDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emailWork_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description_: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    streetno_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    zipcode_: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    city_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    phone_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    otherphone_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    usage_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    comments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    canBeContactedForBEST_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recruitedBecauseOfBEST_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Person__employment_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employment_" },
        ]
      },
      {
        name: "employment_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employment_" },
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
        name: "Person_",
        using: "BTREE",
        fields: [
          { name: "Person_" },
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
        name: "department_",
        using: "BTREE",
        fields: [
          { name: "department_" },
        ]
      },
      {
        name: "position_",
        using: "BTREE",
        fields: [
          { name: "position_" },
        ]
      },
      {
        name: "startDate_",
        using: "BTREE",
        fields: [
          { name: "startDate_" },
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
        name: "emailWork_",
        using: "BTREE",
        fields: [
          { name: "emailWork_" },
        ]
      },
      {
        name: "description_",
        using: "BTREE",
        fields: [
          { name: "description_" },
        ]
      },
      {
        name: "streetno_",
        using: "BTREE",
        fields: [
          { name: "streetno_" },
        ]
      },
      {
        name: "zipcode_",
        using: "BTREE",
        fields: [
          { name: "zipcode_" },
        ]
      },
      {
        name: "city_",
        using: "BTREE",
        fields: [
          { name: "city_" },
        ]
      },
      {
        name: "country_",
        using: "BTREE",
        fields: [
          { name: "country_" },
        ]
      },
      {
        name: "phone_",
        using: "BTREE",
        fields: [
          { name: "phone_" },
        ]
      },
      {
        name: "otherphone_",
        using: "BTREE",
        fields: [
          { name: "otherphone_" },
        ]
      },
      {
        name: "fax_",
        using: "BTREE",
        fields: [
          { name: "fax_" },
        ]
      },
      {
        name: "usage_",
        using: "BTREE",
        fields: [
          { name: "usage_" },
        ]
      },
      {
        name: "canBeContactedForBEST_",
        using: "BTREE",
        fields: [
          { name: "canBeContactedForBEST_" },
        ]
      },
      {
        name: "recruitedBecauseOfBEST_",
        using: "BTREE",
        fields: [
          { name: "recruitedBecauseOfBEST_" },
        ]
      },
      {
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
    ]
  });
	general_Person__employment_.associate = models => {
		general_Person__employment_.belongsTo(models.general_Person_, { foreignKey: "Person_"});
		general_Person__employment_.belongsTo(models.general_company_Company_, { foreignKey: "company_"});
		general_Person__employment_.belongsTo(models.general_Country_, { foreignKey: "country_"});
	};
return general_Person__employment_


};
