/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_forum_Post_ =  sequelize.define('general_forum_Post_', {
    Post_: {
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
    content_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    thread_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_forum_Thread_',
        key: 'Thread_'
      }
    },
    createdBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    parentPost_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_forum_Post_',
        key: 'Post_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_forum_Post_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Post_" },
        ]
      },
      {
        name: "Post_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Post_" },
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
        name: "thread_",
        using: "BTREE",
        fields: [
          { name: "thread_" },
        ]
      },
      {
        name: "createdBy_",
        using: "BTREE",
        fields: [
          { name: "createdBy_" },
        ]
      },
      {
        name: "parentPost_",
        using: "BTREE",
        fields: [
          { name: "parentPost_" },
        ]
      },
    ]
  });
	general_forum_Post_.associate = models => {
		general_forum_Post_.belongsTo(models.general_forum_Thread_, { foreignKey: "thread_"});
		general_forum_Post_.belongsTo(models.general_Person_, { foreignKey: "createdBy_"});
		general_forum_Post_.belongsTo(models.general_forum_Post_, { foreignKey: "parentPost_"});
		general_forum_Post_.hasMany(models.general_forum_Post_, { foreignKey: "parentPost_"});
		general_forum_Post_.hasMany(models.general_forum_Post__opinions_, { foreignKey: "Post_"});
	};
return general_forum_Post_


};
