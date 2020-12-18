/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Application_ =  sequelize.define('best_johnny_Application_', {
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
    code_: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    stud_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Student_',
        key: 'Student_'
      }
    },
    activ_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    },
    sendingLBG_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    courses_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ml_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visa_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studentRankingPosition_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    organiserRankingPosition_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rankingStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    optimisationPosition_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    optimisationStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    testRankingStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    testOptimisationPosition_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    testOptimisationStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finalListPosition_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extraAccepted_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    confirmed_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    participated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    certified_: {
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
    arrival_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    arrivalRef_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    finalStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extraAcceptedDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    depositReturned_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customAnswer1_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customAnswer2_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customAnswer3_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    multiChoiceAnswer1_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    multiChoiceAnswer2_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    multiChoiceAnswer3_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    courseInformationForm_: {
      type: DataTypes.INTEGER,
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
    subscribedToMailingList_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finalListNotificationSent_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evaluationDLNotificationSent_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evaluated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Application_',
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
        name: "code_",
        using: "BTREE",
        fields: [
          { name: "code_" },
        ]
      },
      {
        name: "stud_",
        using: "BTREE",
        fields: [
          { name: "stud_" },
        ]
      },
      {
        name: "activ_",
        using: "BTREE",
        fields: [
          { name: "activ_" },
        ]
      },
      {
        name: "sendingLBG_",
        using: "BTREE",
        fields: [
          { name: "sendingLBG_" },
        ]
      },
      {
        name: "studentRankingPosition_",
        using: "BTREE",
        fields: [
          { name: "studentRankingPosition_" },
        ]
      },
      {
        name: "organiserRankingPosition_",
        using: "BTREE",
        fields: [
          { name: "organiserRankingPosition_" },
        ]
      },
      {
        name: "rankingStatus_",
        using: "BTREE",
        fields: [
          { name: "rankingStatus_" },
        ]
      },
      {
        name: "optimisationPosition_",
        using: "BTREE",
        fields: [
          { name: "optimisationPosition_" },
        ]
      },
      {
        name: "optimisationStatus_",
        using: "BTREE",
        fields: [
          { name: "optimisationStatus_" },
        ]
      },
      {
        name: "finalStatus_",
        using: "BTREE",
        fields: [
          { name: "finalStatus_" },
        ]
      },
      {
        name: "testRankingStatus_",
        using: "BTREE",
        fields: [
          { name: "testRankingStatus_" },
        ]
      },
      {
        name: "testOptimisationPosition_",
        using: "BTREE",
        fields: [
          { name: "testOptimisationPosition_" },
        ]
      },
      {
        name: "testOptimisationStatus_",
        using: "BTREE",
        fields: [
          { name: "testOptimisationStatus_" },
        ]
      },
      {
        name: "finalListPosition_",
        using: "BTREE",
        fields: [
          { name: "finalListPosition_" },
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
        name: "certified_",
        using: "BTREE",
        fields: [
          { name: "certified_" },
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
        name: "arrival_",
        using: "BTREE",
        fields: [
          { name: "arrival_" },
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
        name: "multiChoiceAnswer1_",
        using: "BTREE",
        fields: [
          { name: "multiChoiceAnswer1_" },
        ]
      },
      {
        name: "multiChoiceAnswer2_",
        using: "BTREE",
        fields: [
          { name: "multiChoiceAnswer2_" },
        ]
      },
      {
        name: "multiChoiceAnswer3_",
        using: "BTREE",
        fields: [
          { name: "multiChoiceAnswer3_" },
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
        name: "subscribedToMailingList_",
        using: "BTREE",
        fields: [
          { name: "subscribedToMailingList_" },
        ]
      },
      {
        name: "finalListNotificationSent_",
        using: "BTREE",
        fields: [
          { name: "finalListNotificationSent_" },
        ]
      },
      {
        name: "evaluationDLNotificationSent_",
        using: "BTREE",
        fields: [
          { name: "evaluationDLNotificationSent_" },
        ]
      },
      {
        name: "evaluated_",
        using: "BTREE",
        fields: [
          { name: "evaluated_" },
        ]
      },
    ]
  });
	best_johnny_Application_.associate = models => {
		best_johnny_Application_.belongsTo(models.best_johnny_Student_, { foreignKey: "stud_"});
		best_johnny_Application_.belongsTo(models.best_johnny_Activity_, { foreignKey: "activ_"});
		best_johnny_Application_.belongsTo(models.best_internal_Lbg_, { foreignKey: "sendingLBG_"});
		best_johnny_Application_.belongsTo(models.general_survey_Response_, { foreignKey: "evaluation_"});
		best_johnny_Application_.hasMany(models.best_johnny_Application__comments_, { foreignKey: "Application_"});
	};
return best_johnny_Application_


};
