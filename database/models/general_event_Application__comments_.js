/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_event_Application__comments_ =  sequelize.define('general_event_Application__comments_', {
    comments_: {
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
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    grade_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Application_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_event_Application_',
        key: 'Application_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_event_Application__comments_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comments_" },
        ]
      },
      {
        name: "comments_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "comments_" },
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "grade_",
        using: "BTREE",
        fields: [
          { name: "grade_" },
        ]
      },
      {
        name: "Application_",
        using: "BTREE",
        fields: [
          { name: "Application_" },
        ]
      },
    ]
  });
	general_event_Application__comments_.associate = models => {
		general_event_Application__comments_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		general_event_Application__comments_.belongsTo(models.general_event_Application_, { foreignKey: "Application_"});
	};
return general_event_Application__comments_


};
