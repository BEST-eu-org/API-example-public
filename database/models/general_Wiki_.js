/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Wiki_ =  sequelize.define('general_Wiki_', {
    Wiki_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    titleLower_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    activeRevision_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    virtualPage_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    editors_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Wiki_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Wiki_" },
        ]
      },
      {
        name: "Wiki_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Wiki_" },
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
        name: "titleLower_",
        using: "BTREE",
        fields: [
          { name: "titleLower_" },
        ]
      },
      {
        name: "activeRevision_",
        using: "BTREE",
        fields: [
          { name: "activeRevision_" },
        ]
      },
      {
        name: "virtualPage_",
        using: "BTREE",
        fields: [
          { name: "virtualPage_" },
        ]
      },
      {
        name: "editors_",
        using: "BTREE",
        fields: [
          { name: "editors_" },
        ]
      },
    ]
  });
	general_Wiki_.associate = models => {
		general_Wiki_.belongsTo(models.general_Team_, { foreignKey: "editors_"});
		general_Wiki_.hasMany(models.general_Wiki__history_, { foreignKey: "Wiki_"});
	};
return general_Wiki_


};
