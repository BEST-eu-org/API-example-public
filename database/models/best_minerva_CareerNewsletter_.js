/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter_ =  sequelize.define('best_minerva_CareerNewsletter_', {
    CareerNewsletter_: {
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
    submitter_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    subject_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    greeting_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    message_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    messageType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    targetGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    filter_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_CareerNewsletter__filter_',
        key: 'filter_'
      }
    },
    numberBCC_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberBAS_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberPA_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberBS_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numberBASBCC_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    visibility_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oldSubmitterBestInternalStudent_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submitterType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reply_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newsletterType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CareerNewsletter_" },
        ]
      },
      {
        name: "CareerNewsletter_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CareerNewsletter_" },
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
        name: "submitter_",
        using: "BTREE",
        fields: [
          { name: "submitter_" },
        ]
      },
      {
        name: "subject_",
        using: "BTREE",
        fields: [
          { name: "subject_" },
        ]
      },
      {
        name: "greeting_",
        using: "BTREE",
        fields: [
          { name: "greeting_" },
        ]
      },
      {
        name: "messageType_",
        using: "BTREE",
        fields: [
          { name: "messageType_" },
        ]
      },
      {
        name: "targetGroup_",
        using: "BTREE",
        fields: [
          { name: "targetGroup_" },
        ]
      },
      {
        name: "filter_",
        using: "BTREE",
        fields: [
          { name: "filter_" },
        ]
      },
      {
        name: "numberBCC_",
        using: "BTREE",
        fields: [
          { name: "numberBCC_" },
        ]
      },
      {
        name: "numberBAS_",
        using: "BTREE",
        fields: [
          { name: "numberBAS_" },
        ]
      },
      {
        name: "numberPA_",
        using: "BTREE",
        fields: [
          { name: "numberPA_" },
        ]
      },
      {
        name: "numberMerged_",
        using: "BTREE",
        fields: [
          { name: "numberMerged_" },
        ]
      },
      {
        name: "numberBS_",
        using: "BTREE",
        fields: [
          { name: "numberBS_" },
        ]
      },
      {
        name: "numberBASBCC_",
        using: "BTREE",
        fields: [
          { name: "numberBASBCC_" },
        ]
      },
      {
        name: "visibility_",
        using: "BTREE",
        fields: [
          { name: "visibility_" },
        ]
      },
      {
        name: "submitterType_",
        using: "BTREE",
        fields: [
          { name: "submitterType_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "newsletterType_",
        using: "BTREE",
        fields: [
          { name: "newsletterType_" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter_.associate = models => {
		best_minerva_CareerNewsletter_.belongsTo(models.general_Person_, { foreignKey: "submitter_"});
		best_minerva_CareerNewsletter_.belongsTo(models.best_minerva_CareerNewsletter__filter_, { foreignKey: "filter_"});
		best_minerva_CareerNewsletter_.hasMany(models.best_minerva_CareerNewsletter__offerFrom_, { foreignKey: "CareerNewsletter_"});
		best_minerva_CareerNewsletter_.hasMany(models.best_minerva_CareerNewsletter__recipients_, { foreignKey: "CareerNewsletter_"});
	};
return best_minerva_CareerNewsletter_


};
