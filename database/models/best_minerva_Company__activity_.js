/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company__activity_ =  sequelize.define('best_minerva_Company__activity_', {
    activity_: {
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
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    },
    title_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    startdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finishdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    place_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    require_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salary_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    homepage_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    email_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    address_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    procedure_url_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    proc_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prize_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publicFrom_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    publicUntil_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company__activity_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activity_" },
        ]
      },
      {
        name: "activity_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "activity_" },
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
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "startdate_",
        using: "BTREE",
        fields: [
          { name: "startdate_" },
        ]
      },
      {
        name: "finishdate_",
        using: "BTREE",
        fields: [
          { name: "finishdate_" },
        ]
      },
      {
        name: "deadline_",
        using: "BTREE",
        fields: [
          { name: "deadline_" },
        ]
      },
      {
        name: "place_",
        using: "BTREE",
        fields: [
          { name: "place_" },
        ]
      },
      {
        name: "homepage_",
        using: "BTREE",
        fields: [
          { name: "homepage_" },
        ]
      },
      {
        name: "email_",
        using: "BTREE",
        fields: [
          { name: "email_" },
        ]
      },
      {
        name: "procedure_url_",
        using: "BTREE",
        fields: [
          { name: "procedure_url_" },
        ]
      },
      {
        name: "publicFrom_",
        using: "BTREE",
        fields: [
          { name: "publicFrom_" },
        ]
      },
      {
        name: "publicUntil_",
        using: "BTREE",
        fields: [
          { name: "publicUntil_" },
        ]
      },
    ]
  });
	best_minerva_Company__activity_.associate = models => {
		best_minerva_Company__activity_.belongsTo(models.best_minerva_Company_, { foreignKey: "Company_"});
	};
return best_minerva_Company__activity_


};
