/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Activity__courseInformationForm_ =  sequelize.define('best_johnny_Activity__courseInformationForm_', {
    courseInformationForm_: {
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
    File_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Activity__courseInformationForm_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseInformationForm_" },
        ]
      },
      {
        name: "courseInformationForm_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseInformationForm_" },
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
        name: "File_",
        using: "BTREE",
        fields: [
          { name: "File_" },
        ]
      },
    ]
  });
	best_johnny_Activity__courseInformationForm_.associate = models => {
		best_johnny_Activity__courseInformationForm_.belongsTo(models.best_johnny_Activity_, { foreignKey: "Activity_"});
		best_johnny_Activity__courseInformationForm_.belongsTo(models.general_archive_File_, { foreignKey: "File_"});
	};
return best_johnny_Activity__courseInformationForm_


};
