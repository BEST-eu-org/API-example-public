/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Event_ =  sequelize.define('general_event_Event_', {
    Event_: {
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
      type: DataTypes.STRING(254),
      allowNull: true
    },
    actualPlace_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    url_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    descr_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    organisationStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    budget_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fee_: {
      type: DataTypes.STRING(40),
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
    schedule_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    survival_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contactEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    promoteForAlumni_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approved_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    applicationDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    selectionCriteria_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    selectionDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmationDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    attendanceRegistrationDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    applicationThrough_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    applicationDescription_: {
      type: DataTypes.TEXT,
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
    visibleToCompanies_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_event_Event_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Event_" },
        ]
      },
      {
        name: "Event_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Event_" },
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
        name: "actualPlace_",
        using: "BTREE",
        fields: [
          { name: "actualPlace_" },
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
        name: "organisationStatus_",
        using: "BTREE",
        fields: [
          { name: "organisationStatus_" },
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
        name: "schedule_",
        using: "BTREE",
        fields: [
          { name: "schedule_" },
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
        name: "contactEmail_",
        using: "BTREE",
        fields: [
          { name: "contactEmail_" },
        ]
      },
      {
        name: "promoteForAlumni_",
        using: "BTREE",
        fields: [
          { name: "promoteForAlumni_" },
        ]
      },
      {
        name: "approved_",
        using: "BTREE",
        fields: [
          { name: "approved_" },
        ]
      },
      {
        name: "applicationDeadline_",
        using: "BTREE",
        fields: [
          { name: "applicationDeadline_" },
        ]
      },
      {
        name: "selectionCriteria_",
        using: "BTREE",
        fields: [
          { name: "selectionCriteria_" },
        ]
      },
      {
        name: "selectionDeadline_",
        using: "BTREE",
        fields: [
          { name: "selectionDeadline_" },
        ]
      },
      {
        name: "confirmationDeadline_",
        using: "BTREE",
        fields: [
          { name: "confirmationDeadline_" },
        ]
      },
      {
        name: "attendanceRegistrationDeadline_",
        using: "BTREE",
        fields: [
          { name: "attendanceRegistrationDeadline_" },
        ]
      },
      {
        name: "applicationThrough_",
        using: "BTREE",
        fields: [
          { name: "applicationThrough_" },
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
        name: "visibleToCompanies_",
        using: "BTREE",
        fields: [
          { name: "visibleToCompanies_" },
        ]
      },
    ]
  });
	general_event_Event_.associate = models => {
		general_event_Event_.hasMany(models.best_internal_Event_, { foreignKey: "generalEvent_"});
		general_event_Event_.hasOne(models.best_internal_training_Call_, { foreignKey: "event_"});
		general_event_Event_.hasMany(models.best_internal_training_ExternalCourse_, { foreignKey: "generalEvent_"});
		general_event_Event_.hasMany(models.best_internal_training_Session_, { foreignKey: "event_"});
		general_event_Event_.hasMany(models.best_internal_training_Trainer_, { foreignKey: "tttEvent_"});
		general_event_Event_.hasMany(models.best_local_Event_, { foreignKey: "generalEvent_"});
		general_event_Event_.hasMany(models.general_Availability_, { foreignKey: "event_"});
		general_event_Event_.hasMany(models.general_Project__events_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_archive_Folder__events_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Application_, { foreignKey: "event_"});
		general_event_Event_.hasMany(models.general_event_Event__activities_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__applicationQuestions_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__applicationReviewTeams_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__companyActivities_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__mainOrganisers_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__materials_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__organisers_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__organisingLBGs_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__otherOrganisations_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__showTo_, { foreignKey: "Event_"});
		general_event_Event_.hasMany(models.general_event_Event__targetUniversities_, { foreignKey: "Event_"});
	};
return general_event_Event_


};
