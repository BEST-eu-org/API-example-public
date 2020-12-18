/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Event_ =  sequelize.define('best_internal_Event_', {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bestNo_: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "bestNo_"
    },
    place_: {
      type: DataTypes.STRING(100),
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
    appNeeded_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    selectionCriteria_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coordinator_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    homepage_: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    other_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tmp_topics_: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tmp_organisingLBGs_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmp_organisers_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    uid_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    survey_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    organisationStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deposit_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promoteForAlumni_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    generalEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_Event_',
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
        name: "bestNo_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bestNo_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "appNeeded_",
        using: "BTREE",
        fields: [
          { name: "appNeeded_" },
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
        name: "tmp_topics_",
        using: "BTREE",
        fields: [
          { name: "tmp_topics_" },
        ]
      },
      {
        name: "tmp_organisingLBGs_",
        using: "BTREE",
        fields: [
          { name: "tmp_organisingLBGs_" },
        ]
      },
      {
        name: "tmp_organisers_",
        using: "BTREE",
        fields: [
          { name: "tmp_organisers_" },
        ]
      },
      {
        name: "uid_",
        using: "BTREE",
        fields: [
          { name: "uid_" },
        ]
      },
      {
        name: "survey_",
        using: "BTREE",
        fields: [
          { name: "survey_" },
        ]
      },
      {
        name: "deposit_",
        using: "BTREE",
        fields: [
          { name: "deposit_" },
        ]
      },
      {
        name: "generalEvent_",
        using: "BTREE",
        fields: [
          { name: "generalEvent_" },
        ]
      },
    ]
  });
	best_internal_Event_.associate = models => {
		best_internal_Event_.belongsTo(models.general_Person_, { foreignKey: "coordinator_"});
		best_internal_Event_.belongsTo(models.general_survey_Survey_, { foreignKey: "survey_"});
		best_internal_Event_.belongsTo(models.general_event_Event_, { foreignKey: "generalEvent_"});
		best_internal_Event_.hasMany(models.best_internal_Event__topics_, { foreignKey: "Event_"});
		best_internal_Event_.hasMany(models.best_internal_LbgApplication_, { foreignKey: "event_"});
		best_internal_Event_.hasMany(models.best_internal_Lbg__membershipHistory_, { foreignKey: "event_"});
		best_internal_Event_.hasMany(models.best_internal_RefundRequest_, { foreignKey: "internalEvent_"});
		best_internal_Event_.hasMany(models.best_internal_tasklist_TaskList_, { foreignKey: "event_"});
		best_internal_Event_.hasMany(models.best_internal_vote_Session_, { foreignKey: "event_"});
		best_internal_Event_.hasMany(models.general_Project_, { foreignKey: "internalEvent_"});
		best_internal_Event_.hasMany(models.general_accounting_Transfer_, { foreignKey: "internalEvent_"});
		best_internal_Event_.hasMany(models.general_archive_Document_, { foreignKey: "approvedBy_"});
		best_internal_Event_.hasMany(models.general_archive_Document__events_, { foreignKey: "Event_"});
		best_internal_Event_.hasMany(models.general_archive_File_, { foreignKey: "approvedBy_"});
		best_internal_Event_.hasMany(models.general_survey_Response_, { foreignKey: "responseToEvent_"});
	};
return best_internal_Event_


};
