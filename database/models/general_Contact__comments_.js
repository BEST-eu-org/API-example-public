/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Contact__comments_ =  sequelize.define('general_Contact__comments_', {
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
    commentSubmittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    Contact_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Contact_',
        key: 'Contact_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Contact__comments_',
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
        name: "commentSubmittedBy_",
        using: "BTREE",
        fields: [
          { name: "commentSubmittedBy_" },
        ]
      },
      {
        name: "Contact_",
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
    ]
  });
	general_Contact__comments_.associate = models => {
		general_Contact__comments_.belongsTo(models.best_internal_Student_, { foreignKey: "commentSubmittedBy_"});
		general_Contact__comments_.belongsTo(models.general_Contact_, { foreignKey: "Contact_"});
	};
return general_Contact__comments_


};
