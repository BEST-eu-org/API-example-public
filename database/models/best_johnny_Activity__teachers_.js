/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Activity__teachers_ =  sequelize.define('best_johnny_Activity__teachers_', {
    teachers_: {
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
    Activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    },
    teacher_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_CompanyRepresentative_',
        key: 'CompanyRepresentative_'
      }
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
    subscribedToMailingList_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Activity__teachers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teachers_" },
        ]
      },
      {
        name: "teachers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teachers_" },
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
        name: "Activity_",
        using: "BTREE",
        fields: [
          { name: "Activity_" },
        ]
      },
      {
        name: "teacher_",
        using: "BTREE",
        fields: [
          { name: "teacher_" },
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
        name: "subscribedToMailingList_",
        using: "BTREE",
        fields: [
          { name: "subscribedToMailingList_" },
        ]
      },
    ]
  });
	best_johnny_Activity__teachers_.associate = models => {
		best_johnny_Activity__teachers_.belongsTo(models.best_johnny_Activity_, { foreignKey: "Activity_"});
		best_johnny_Activity__teachers_.belongsTo(models.general_company_CompanyRepresentative_, { foreignKey: "teacher_"});
		best_johnny_Activity__teachers_.belongsTo(models.general_survey_Response_, { foreignKey: "evaluation_"});
	};
return best_johnny_Activity__teachers_


};
