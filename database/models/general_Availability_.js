/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Availability_ =  sequelize.define('general_Availability_', {
    Availability_: {
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
    student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    personalEventDescription_: {
      type: DataTypes.STRING(40),
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
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Event_',
        key: 'Event_'
      }
    },
    actvity_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    availability__: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    reachableBy_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Availability_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Availability_" },
        ]
      },
      {
        name: "Availability_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Availability_" },
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
        name: "student_",
        using: "BTREE",
        fields: [
          { name: "student_" },
        ]
      },
      {
        name: "personalEventDescription_",
        using: "BTREE",
        fields: [
          { name: "personalEventDescription_" },
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
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
        ]
      },
      {
        name: "availability__",
        using: "BTREE",
        fields: [
          { name: "availability__" },
        ]
      },
      {
        name: "comment_",
        using: "BTREE",
        fields: [
          { name: "comment_" },
        ]
      },
      {
        name: "reachableBy_",
        using: "BTREE",
        fields: [
          { name: "reachableBy_" },
        ]
      },
      {
        name: "activity_",
        using: "BTREE",
        fields: [
          { name: "activity_" },
        ]
      },
    ]
  });
	general_Availability_.associate = models => {
		general_Availability_.belongsTo(models.best_internal_Student_, { foreignKey: "student_"});
		general_Availability_.belongsTo(models.general_event_Event_, { foreignKey: "event_"});
		general_Availability_.belongsTo(models.best_johnny_Activity_, { foreignKey: "activity_"});
	};
return general_Availability_


};
