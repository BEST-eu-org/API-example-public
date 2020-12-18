/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Topic_ =  sequelize.define('general_Topic_', {
    Topic_: {
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
    title_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    super_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    code_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    responsiblePerson_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    responsibleGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Topic_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Topic_" },
        ]
      },
      {
        name: "Topic_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Topic_" },
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
        name: "title_",
        using: "BTREE",
        fields: [
          { name: "title_" },
        ]
      },
      {
        name: "super_",
        using: "BTREE",
        fields: [
          { name: "super_" },
        ]
      },
      {
        name: "code_",
        using: "BTREE",
        fields: [
          { name: "code_" },
        ]
      },
      {
        name: "responsiblePerson_",
        using: "BTREE",
        fields: [
          { name: "responsiblePerson_" },
        ]
      },
      {
        name: "responsibleGroup_",
        using: "BTREE",
        fields: [
          { name: "responsibleGroup_" },
        ]
      },
    ]
  });
	general_Topic_.associate = models => {
		general_Topic_.hasMany(models.best_internal_Event__topics_, { foreignKey: "Topic_"});
		general_Topic_.belongsTo(models.general_Person_, { foreignKey: "responsiblePerson_"});
		general_Topic_.belongsTo(models.general_Team_, { foreignKey: "responsibleGroup_"});
		general_Topic_.hasMany(models.general_archive_Archive__topics_, { foreignKey: "Topic_"});
	};
return general_Topic_


};
