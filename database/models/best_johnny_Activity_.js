/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Activity_ =  sequelize.define('best_johnny_Activity_', {
    Activity_: {
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
    responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    season_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Season_',
        key: 'Season_'
      }
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    rankingPlaces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    optimisedPlaces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    testOptimisedPlaces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finalPlaces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    actualPlace_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    number_: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    descr_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    budget_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leaflet_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    survival_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    inSeason_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    appDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastRanked_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lbgEvalForm_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studentEvalForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    profEvalForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    lbgEval_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Response_',
        key: 'Response_'
      },
      unique: "best_johnny_Activity__ibfk_9"
    },
    email_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    learningHours_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    examination_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    goals_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    requirements_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topics_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isGreenApple_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isGreenAppleStamped_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grapResponsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    level_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    participants_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lodging_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    food_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transportation_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schedule_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    customQuestion1_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customQuestion2_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customQuestion3_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isLearningEventStamped_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    multiChoiceQuestion1_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    multiChoiceQuestion2_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    multiChoiceQuestion3_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rankingWaitingPlaces_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    courseInformationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showRelevantCoursesBox_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isRecognisedByUniversity_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ectsCredits_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ectsCreditsClarification_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    relatedWebpages_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mailingListName_: {
      type: DataTypes.STRING(150),
      allowNull: true,
      unique: "mailingListName_"
    },
    repliesTo_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cifCounter_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oldTypeCharEnum_: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    oldTextFee_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    fee_: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    priorKnowledgeRequired_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    visibleToCompanies_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    companiesNumber_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    visitorsNumber_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feeForCompanies_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contactDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    meanOfPromotion_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eventAgenda_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    targetStudentsDescription_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isRedAppleStamped_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    video_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    isAppleStamped_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    canceled_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Activity_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Activity_" },
        ]
      },
      {
        name: "Activity_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Activity_" },
        ]
      },
      {
        name: "lbgEval_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lbgEval_" },
        ]
      },
      {
        name: "mailingListName_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mailingListName_" },
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
        name: "responsible_",
        using: "BTREE",
        fields: [
          { name: "responsible_" },
        ]
      },
      {
        name: "season_",
        using: "BTREE",
        fields: [
          { name: "season_" },
        ]
      },
      {
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "rankingPlaces_",
        using: "BTREE",
        fields: [
          { name: "rankingPlaces_" },
        ]
      },
      {
        name: "optimisedPlaces_",
        using: "BTREE",
        fields: [
          { name: "optimisedPlaces_" },
        ]
      },
      {
        name: "testOptimisedPlaces_",
        using: "BTREE",
        fields: [
          { name: "testOptimisedPlaces_" },
        ]
      },
      {
        name: "finalPlaces_",
        using: "BTREE",
        fields: [
          { name: "finalPlaces_" },
        ]
      },
      {
        name: "actualPlace_",
        using: "BTREE",
        fields: [
          { name: "actualPlace_" },
        ]
      },
      {
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "number_",
        using: "BTREE",
        fields: [
          { name: "number_" },
        ]
      },
      {
        name: "leaflet_",
        using: "BTREE",
        fields: [
          { name: "leaflet_" },
        ]
      },
      {
        name: "survival_",
        using: "BTREE",
        fields: [
          { name: "survival_" },
        ]
      },
      {
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
      {
        name: "inSeason_",
        using: "BTREE",
        fields: [
          { name: "inSeason_" },
        ]
      },
      {
        name: "start_",
        using: "BTREE",
        fields: [
          { name: "start_" },
        ]
      },
      {
        name: "end_",
        using: "BTREE",
        fields: [
          { name: "end_" },
        ]
      },
      {
        name: "appDeadline_",
        using: "BTREE",
        fields: [
          { name: "appDeadline_" },
        ]
      },
      {
        name: "lastRanked_",
        using: "BTREE",
        fields: [
          { name: "lastRanked_" },
        ]
      },
      {
        name: "studentEvalForm_",
        using: "BTREE",
        fields: [
          { name: "studentEvalForm_" },
        ]
      },
      {
        name: "profEvalForm_",
        using: "BTREE",
        fields: [
          { name: "profEvalForm_" },
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
        name: "learningHours_",
        using: "BTREE",
        fields: [
          { name: "learningHours_" },
        ]
      },
      {
        name: "isGreenApple_",
        using: "BTREE",
        fields: [
          { name: "isGreenApple_" },
        ]
      },
      {
        name: "isGreenAppleStamped_",
        using: "BTREE",
        fields: [
          { name: "isGreenAppleStamped_" },
        ]
      },
      {
        name: "grapResponsible_",
        using: "BTREE",
        fields: [
          { name: "grapResponsible_" },
        ]
      },
      {
        name: "rankingWaitingPlaces_",
        using: "BTREE",
        fields: [
          { name: "rankingWaitingPlaces_" },
        ]
      },
      {
        name: "isRecognisedByUniversity_",
        using: "BTREE",
        fields: [
          { name: "isRecognisedByUniversity_" },
        ]
      },
      {
        name: "ectsCredits_",
        using: "BTREE",
        fields: [
          { name: "ectsCredits_" },
        ]
      },
      {
        name: "ectsCreditsClarification_",
        using: "BTREE",
        fields: [
          { name: "ectsCreditsClarification_" },
        ]
      },
      {
        name: "isLearningEventStamped_",
        using: "BTREE",
        fields: [
          { name: "isLearningEventStamped_" },
        ]
      },
      {
        name: "level_",
        using: "BTREE",
        fields: [
          { name: "level_" },
        ]
      },
      {
        name: "schedule_",
        using: "BTREE",
        fields: [
          { name: "schedule_" },
        ]
      },
      {
        name: "showRelevantCoursesBox_",
        using: "BTREE",
        fields: [
          { name: "showRelevantCoursesBox_" },
        ]
      },
      {
        name: "repliesTo_",
        using: "BTREE",
        fields: [
          { name: "repliesTo_" },
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
        name: "oldTypeCharEnum_",
        using: "BTREE",
        fields: [
          { name: "oldTypeCharEnum_" },
        ]
      },
      {
        name: "oldTextFee_",
        using: "BTREE",
        fields: [
          { name: "oldTextFee_" },
        ]
      },
      {
        name: "fee_",
        using: "BTREE",
        fields: [
          { name: "fee_" },
        ]
      },
      {
        name: "priorKnowledgeRequired_",
        using: "BTREE",
        fields: [
          { name: "priorKnowledgeRequired_" },
        ]
      },
      {
        name: "visibleToCompanies_",
        using: "BTREE",
        fields: [
          { name: "visibleToCompanies_" },
        ]
      },
      {
        name: "companiesNumber_",
        using: "BTREE",
        fields: [
          { name: "companiesNumber_" },
        ]
      },
      {
        name: "visitorsNumber_",
        using: "BTREE",
        fields: [
          { name: "visitorsNumber_" },
        ]
      },
      {
        name: "contactDeadline_",
        using: "BTREE",
        fields: [
          { name: "contactDeadline_" },
        ]
      },
      {
        name: "cifCounter_",
        using: "BTREE",
        fields: [
          { name: "cifCounter_" },
        ]
      },
      {
        name: "isRedAppleStamped_",
        using: "BTREE",
        fields: [
          { name: "isRedAppleStamped_" },
        ]
      },
      {
        name: "video_",
        using: "BTREE",
        fields: [
          { name: "video_" },
        ]
      },
      {
        name: "isAppleStamped_",
        using: "BTREE",
        fields: [
          { name: "isAppleStamped_" },
        ]
      },
      {
        name: "canceled_",
        using: "BTREE",
        fields: [
          { name: "canceled_" },
        ]
      },
    ]
  });
	best_johnny_Activity_.associate = models => {
		best_johnny_Activity_.hasMany(models.best_internal_RefundRequest_, { foreignKey: "basEvent_"});
		best_johnny_Activity_.belongsTo(models.best_internal_Student_, { foreignKey: "responsible_"});
		best_johnny_Activity_.belongsTo(models.best_johnny_Season_, { foreignKey: "season_"});
		best_johnny_Activity_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		best_johnny_Activity_.belongsTo(models.general_survey_Survey_, { foreignKey: "studentEvalForm_"});
		best_johnny_Activity_.belongsTo(models.general_survey_Survey_, { foreignKey: "profEvalForm_"});
		best_johnny_Activity_.belongsTo(models.general_survey_Response_, { foreignKey: "lbgEval_"});
		best_johnny_Activity_.belongsTo(models.best_internal_Student_, { foreignKey: "grapResponsible_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__activities_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__additionalSubscribers_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__courseInformationForm_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__fieldsOfActivity_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__hosts_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__materials_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__multiChoiseOptions1_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__multiChoiseOptions2_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__multiChoiseOptions3_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__organisers_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__profEvals_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Activity__teachers_, { foreignKey: "Activity_"});
		best_johnny_Activity_.hasMany(models.best_johnny_Application_, { foreignKey: "activ_"});
		best_johnny_Activity_.hasMany(models.general_Availability_, { foreignKey: "activity_"});
		best_johnny_Activity_.hasMany(models.general_Project_, { foreignKey: "vivaldiEvent_"});
		best_johnny_Activity_.hasMany(models.general_accounting_Transfer_, { foreignKey: "basEvent_"});
		best_johnny_Activity_.hasMany(models.general_survey_Response_, { foreignKey: "responseToActivity_"});
	};
return best_johnny_Activity_


};
