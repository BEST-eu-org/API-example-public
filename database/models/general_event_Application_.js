/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Application_ =  sequelize.define('general_event_Application_', {
    Application_: {
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
    applicant_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    },
    arrival_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arrivalPlace_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    arrivalMean_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    arrivalRef_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    departure_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    departurePlace_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    departureMean_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departureRef_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    motivationLetter_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visa_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extraAccepted_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extraAcceptedDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    depositReturned_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    participated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evaluationSigned_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evaluation_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Response_',
        key: 'Response_'
      }
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    applyAs_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Application_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Application_" },
        ]
      },
      {
        name: "Application_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Application_" },
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
        name: "applicant_",
        using: "BTREE",
        fields: [
          { name: "applicant_" },
        ]
      },
      {
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
        ]
      },
      {
        name: "arrival_",
        using: "BTREE",
        fields: [
          { name: "arrival_" },
        ]
      },
      {
        name: "arrivalPlace_",
        using: "BTREE",
        fields: [
          { name: "arrivalPlace_" },
        ]
      },
      {
        name: "arrivalMean_",
        using: "BTREE",
        fields: [
          { name: "arrivalMean_" },
        ]
      },
      {
        name: "arrivalRef_",
        using: "BTREE",
        fields: [
          { name: "arrivalRef_" },
        ]
      },
      {
        name: "departure_",
        using: "BTREE",
        fields: [
          { name: "departure_" },
        ]
      },
      {
        name: "departurePlace_",
        using: "BTREE",
        fields: [
          { name: "departurePlace_" },
        ]
      },
      {
        name: "departureMean_",
        using: "BTREE",
        fields: [
          { name: "departureMean_" },
        ]
      },
      {
        name: "departureRef_",
        using: "BTREE",
        fields: [
          { name: "departureRef_" },
        ]
      },
      {
        name: "visa_",
        using: "BTREE",
        fields: [
          { name: "visa_" },
        ]
      },
      {
        name: "extraAccepted_",
        using: "BTREE",
        fields: [
          { name: "extraAccepted_" },
        ]
      },
      {
        name: "extraAcceptedDate_",
        using: "BTREE",
        fields: [
          { name: "extraAcceptedDate_" },
        ]
      },
      {
        name: "confirmed_",
        using: "BTREE",
        fields: [
          { name: "confirmed_" },
        ]
      },
      {
        name: "depositReturned_",
        using: "BTREE",
        fields: [
          { name: "depositReturned_" },
        ]
      },
      {
        name: "participated_",
        using: "BTREE",
        fields: [
          { name: "participated_" },
        ]
      },
      {
        name: "evaluationSigned_",
        using: "BTREE",
        fields: [
          { name: "evaluationSigned_" },
        ]
      },
      {
        name: "evaluation_",
        using: "BTREE",
        fields: [
          { name: "evaluation_" },
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
        name: "applyAs_",
        using: "BTREE",
        fields: [
          { name: "applyAs_" },
        ]
      },
    ]
  });
	general_event_Application_.associate = models => {
		general_event_Application_.belongsTo(models.general_Person_, { foreignKey: "applicant_"});
		general_event_Application_.belongsTo(models.general_event_Event_, { foreignKey: "event_"});
		general_event_Application_.belongsTo(models.general_survey_Response_, { foreignKey: "evaluation_"});
		general_event_Application_.hasMany(models.general_event_Application__activities_, { foreignKey: "Application_"});
		general_event_Application_.hasMany(models.general_event_Application__answers_, { foreignKey: "Application_"});
		general_event_Application_.hasMany(models.general_event_Application__comments_, { foreignKey: "Application_"});
	};
return general_event_Application_


};
