/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const org_makumba_devel_relations_Relation_ =  sequelize.define('org_makumba_devel_relations_Relation_', {
    Relation_: {
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
    fromFile_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toFile_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fromURL_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    toURL_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    webapp_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'org_makumba_devel_relations_WebappDatabase_',
        key: 'WebappDatabase_'
      }
    }
  }, {
    sequelize,
    tableName: 'org_makumba_devel_relations_Relation_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Relation_" },
        ]
      },
      {
        name: "Relation_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Relation_" },
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
        name: "fromFile_",
        using: "BTREE",
        fields: [
          { name: "fromFile_" },
        ]
      },
      {
        name: "toFile_",
        using: "BTREE",
        fields: [
          { name: "toFile_" },
        ]
      },
      {
        name: "fromURL_",
        using: "BTREE",
        fields: [
          { name: "fromURL_" },
        ]
      },
      {
        name: "toURL_",
        using: "BTREE",
        fields: [
          { name: "toURL_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "webapp_",
        using: "BTREE",
        fields: [
          { name: "webapp_" },
        ]
      },
    ]
  });
	org_makumba_devel_relations_Relation_.associate = models => {
		org_makumba_devel_relations_Relation_.belongsTo(models.org_makumba_devel_relations_WebappDatabase_, { foreignKey: "webapp_"});
		org_makumba_devel_relations_Relation_.hasMany(models.org_makumba_devel_relations_Relation__origin_, { foreignKey: "Relation_"});
	};
return org_makumba_devel_relations_Relation_


};
