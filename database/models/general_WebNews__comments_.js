/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_WebNews__comments_ =  sequelize.define('general_WebNews__comments_', {
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
    WebNews_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_WebNews_',
        key: 'WebNews_'
      }
    },
    data_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SubmittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    submittedBy__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_WebNews__comments_',
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
        name: "WebNews_",
        using: "BTREE",
        fields: [
          { name: "WebNews_" },
        ]
      },
      {
        name: "SubmittedBy_",
        using: "BTREE",
        fields: [
          { name: "SubmittedBy_" },
        ]
      },
      {
        name: "submittedBy__",
        using: "BTREE",
        fields: [
          { name: "submittedBy__" },
        ]
      },
    ]
  });
	general_WebNews__comments_.associate = models => {
		general_WebNews__comments_.belongsTo(models.general_WebNews_, { foreignKey: "WebNews_"});
		general_WebNews__comments_.belongsTo(models.best_internal_Student_, { foreignKey: "SubmittedBy_"});
		general_WebNews__comments_.belongsTo(models.general_Person_, { foreignKey: "submittedBy__"});
	};
return general_WebNews__comments_


};
