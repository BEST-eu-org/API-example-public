/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Activity__profEvals_ =  sequelize.define('best_johnny_Activity__profEvals_', {
    profEvals_: {
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
    eval_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Response_',
        key: 'Response_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Activity__profEvals_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profEvals_" },
        ]
      },
      {
        name: "profEvals_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profEvals_" },
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
        name: "eval_",
        using: "BTREE",
        fields: [
          { name: "eval_" },
        ]
      },
    ]
  });
	best_johnny_Activity__profEvals_.associate = models => {
		best_johnny_Activity__profEvals_.belongsTo(models.best_johnny_Activity_, { foreignKey: "Activity_"});
		best_johnny_Activity__profEvals_.belongsTo(models.general_survey_Response_, { foreignKey: "eval_"});
	};
return best_johnny_Activity__profEvals_


};
