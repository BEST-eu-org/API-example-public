/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_survey_Survey__owner_ =  sequelize.define('general_survey_Survey__owner_', {
    owner_: {
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
    Survey_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_survey_Survey_',
        key: 'Survey_'
      }
    },
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_survey_Survey__owner_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "owner_" },
        ]
      },
      {
        name: "owner_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "owner_" },
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
        name: "Survey_",
        using: "BTREE",
        fields: [
          { name: "Survey_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	general_survey_Survey__owner_.associate = models => {
		general_survey_Survey__owner_.belongsTo(models.general_survey_Survey_, { foreignKey: "Survey_"});
		general_survey_Survey__owner_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return general_survey_Survey__owner_


};
