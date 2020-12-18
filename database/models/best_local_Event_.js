/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_local_Event_ =  sequelize.define('best_local_Event_', {
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
    generalEvent_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_local_EventType_',
        key: 'EventType_'
      }
    },
    headline_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    period_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    approved_: {
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
    gatheredCVsNumber_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    host_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
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
    }
  }, {
    sequelize,
    tableName: 'best_local_Event_',
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
        name: "generalEvent_",
        using: "BTREE",
        fields: [
          { name: "generalEvent_" },
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
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "period_",
        using: "BTREE",
        fields: [
          { name: "period_" },
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
        name: "host_",
        using: "BTREE",
        fields: [
          { name: "host_" },
        ]
      },
    ]
  });
	best_local_Event_.associate = models => {
		best_local_Event_.belongsTo(models.general_event_Event_, { foreignKey: "generalEvent_"});
		best_local_Event_.belongsTo(models.best_local_EventType_, { foreignKey: "type_"});
		best_local_Event_.belongsTo(models.best_internal_Student_, { foreignKey: "submittedBy_"});
		best_local_Event_.belongsTo(models.best_internal_Lbg_, { foreignKey: "host_"});
		best_local_Event_.hasMany(models.best_local_Event__companies_, { foreignKey: "Event_"});
		best_local_Event_.hasMany(models.best_local_Event__targetLBGs_, { foreignKey: "Event_"});
		best_local_Event_.hasMany(models.best_local_Event__targetStudents_, { foreignKey: "Event_"});
	};
return best_local_Event_


};
