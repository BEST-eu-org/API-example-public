/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Season_ =  sequelize.define('best_johnny_Season_', {
    Season_: {
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
    name_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    responsible_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    email_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    coordinator_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    start_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    materials_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    missingEvaluationDebtsPosted_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    participatedButNotOKDebtsPosted_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    courseOnTechnologyEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    courseOnLanguagesEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    courseOnCareerRelatedSkillsEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    engineeringCompetitionEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    eventOnEducationEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    leisureEventEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    partnerOrganisationEventEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    debtsPosted_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    europeanBestEngineeringCompetitionEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    bestCareerDayEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    teacherEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    organiserEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    onlineCourseEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    localCourseEvaluationForm_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Season_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Season_" },
        ]
      },
      {
        name: "Season_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Season_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
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
        name: "email_",
        using: "BTREE",
        fields: [
          { name: "email_" },
        ]
      },
      {
        name: "coordinator_",
        using: "BTREE",
        fields: [
          { name: "coordinator_" },
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
        name: "materials_",
        using: "BTREE",
        fields: [
          { name: "materials_" },
        ]
      },
      {
        name: "courseOnTechnologyEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "courseOnTechnologyEvaluationForm_" },
        ]
      },
      {
        name: "courseOnLanguagesEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "courseOnLanguagesEvaluationForm_" },
        ]
      },
      {
        name: "courseOnCareerRelatedSkillsEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "courseOnCareerRelatedSkillsEvaluationForm_" },
        ]
      },
      {
        name: "engineeringCompetitionEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "engineeringCompetitionEvaluationForm_" },
        ]
      },
      {
        name: "eventOnEducationEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "eventOnEducationEvaluationForm_" },
        ]
      },
      {
        name: "leisureEventEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "leisureEventEvaluationForm_" },
        ]
      },
      {
        name: "partnerOrganisationEventEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "partnerOrganisationEventEvaluationForm_" },
        ]
      },
      {
        name: "debtsPosted_",
        using: "BTREE",
        fields: [
          { name: "debtsPosted_" },
        ]
      },
      {
        name: "europeanBestEngineeringCompetitionEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "europeanBestEngineeringCompetitionEvaluationForm_" },
        ]
      },
      {
        name: "bestCareerDayEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "bestCareerDayEvaluationForm_" },
        ]
      },
      {
        name: "teacherEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "teacherEvaluationForm_" },
        ]
      },
      {
        name: "organiserEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "organiserEvaluationForm_" },
        ]
      },
      {
        name: "onlineCourseEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "onlineCourseEvaluationForm_" },
        ]
      },
      {
        name: "localCourseEvaluationForm_",
        using: "BTREE",
        fields: [
          { name: "localCourseEvaluationForm_" },
        ]
      },
    ]
  });
	best_johnny_Season_.associate = models => {
		best_johnny_Season_.hasMany(models.best_Auth__codes_, { foreignKey: "season_"});
		best_johnny_Season_.hasMany(models.best_johnny_Activity_, { foreignKey: "season_"});
		best_johnny_Season_.belongsTo(models.best_internal_Student_, { foreignKey: "coordinator_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "courseOnTechnologyEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "courseOnLanguagesEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "courseOnCareerRelatedSkillsEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "engineeringCompetitionEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "eventOnEducationEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "leisureEventEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "partnerOrganisationEventEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "europeanBestEngineeringCompetitionEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "bestCareerDayEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "teacherEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "organiserEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "onlineCourseEvaluationForm_"});
		best_johnny_Season_.belongsTo(models.general_survey_Survey_, { foreignKey: "localCourseEvaluationForm_"});
		best_johnny_Season_.hasMany(models.best_johnny_Season__deadlines_, { foreignKey: "Season_"});
	};
return best_johnny_Season_


};
