/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const org_makumba_devel_relations_RelationOrigin_ =  sequelize.define('org_makumba_devel_relations_RelationOrigin_', {
    RelationOrigin_: {
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
    startcol_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endcol_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startline_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endline_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tagname_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expr_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    field_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reason_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'org_makumba_devel_relations_RelationOrigin_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RelationOrigin_" },
        ]
      },
      {
        name: "RelationOrigin_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RelationOrigin_" },
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
        name: "startcol_",
        using: "BTREE",
        fields: [
          { name: "startcol_" },
        ]
      },
      {
        name: "endcol_",
        using: "BTREE",
        fields: [
          { name: "endcol_" },
        ]
      },
      {
        name: "startline_",
        using: "BTREE",
        fields: [
          { name: "startline_" },
        ]
      },
      {
        name: "endline_",
        using: "BTREE",
        fields: [
          { name: "endline_" },
        ]
      },
      {
        name: "tagname_",
        using: "BTREE",
        fields: [
          { name: "tagname_" },
        ]
      },
      {
        name: "expr_",
        using: "BTREE",
        fields: [
          { name: "expr_" },
        ]
      },
      {
        name: "field_",
        using: "BTREE",
        fields: [
          { name: "field_" },
        ]
      },
    ]
  });
	org_makumba_devel_relations_RelationOrigin_.associate = models => {
		org_makumba_devel_relations_RelationOrigin_.hasMany(models.org_makumba_devel_relations_Relation__origin_, { foreignKey: "RelationOrigin_"});
	};
return org_makumba_devel_relations_RelationOrigin_


};
