/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Student__lang_ =  sequelize.define('best_Student__lang_', {
    lang_: {
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
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    language_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Language_',
        key: 'Language_'
      }
    },
    underlevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    readlevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speaklevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    writing_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    generalLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_Student__lang_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_" },
        ]
      },
      {
        name: "lang_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_" },
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
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "language_",
        using: "BTREE",
        fields: [
          { name: "language_" },
        ]
      },
      {
        name: "underlevel_",
        using: "BTREE",
        fields: [
          { name: "underlevel_" },
        ]
      },
      {
        name: "readlevel_",
        using: "BTREE",
        fields: [
          { name: "readlevel_" },
        ]
      },
      {
        name: "speaklevel_",
        using: "BTREE",
        fields: [
          { name: "speaklevel_" },
        ]
      },
      {
        name: "writing_",
        using: "BTREE",
        fields: [
          { name: "writing_" },
        ]
      },
      {
        name: "generalLevel_",
        using: "BTREE",
        fields: [
          { name: "generalLevel_" },
        ]
      },
    ]
  });
	best_Student__lang_.associate = models => {
		best_Student__lang_.belongsTo(models.best_Student_, { foreignKey: "Student_"});
		best_Student__lang_.belongsTo(models.general_Language_, { foreignKey: "language_"});
	};
return best_Student__lang_


};
