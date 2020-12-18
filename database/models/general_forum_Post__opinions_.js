/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_forum_Post__opinions_ =  sequelize.define('general_forum_Post__opinions_', {
    opinions_: {
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
    opinion_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    Post_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_forum_Post_',
        key: 'Post_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_forum_Post__opinions_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "opinions_" },
        ]
      },
      {
        name: "opinions_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "opinions_" },
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
        name: "opinion_",
        using: "BTREE",
        fields: [
          { name: "opinion_" },
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
        name: "Post_",
        using: "BTREE",
        fields: [
          { name: "Post_" },
        ]
      },
    ]
  });
	general_forum_Post__opinions_.associate = models => {
		general_forum_Post__opinions_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		general_forum_Post__opinions_.belongsTo(models.general_forum_Post_, { foreignKey: "Post_"});
	};
return general_forum_Post__opinions_


};
