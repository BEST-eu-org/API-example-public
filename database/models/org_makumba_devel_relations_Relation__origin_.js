/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const org_makumba_devel_relations_Relation__origin_ =  sequelize.define('org_makumba_devel_relations_Relation__origin_', {
    origin_: {
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
    Relation_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'org_makumba_devel_relations_Relation_',
        key: 'Relation_'
      }
    },
    RelationOrigin_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'org_makumba_devel_relations_RelationOrigin_',
        key: 'RelationOrigin_'
      }
    }
  }, {
    sequelize,
    tableName: 'org_makumba_devel_relations_Relation__origin_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "origin_" },
        ]
      },
      {
        name: "origin_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "origin_" },
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
        name: "Relation_",
        using: "BTREE",
        fields: [
          { name: "Relation_" },
        ]
      },
      {
        name: "RelationOrigin_",
        using: "BTREE",
        fields: [
          { name: "RelationOrigin_" },
        ]
      },
    ]
  });
	org_makumba_devel_relations_Relation__origin_.associate = models => {
		org_makumba_devel_relations_Relation__origin_.belongsTo(models.org_makumba_devel_relations_Relation_, { foreignKey: "Relation_"});
		org_makumba_devel_relations_Relation__origin_.belongsTo(models.org_makumba_devel_relations_RelationOrigin_, { foreignKey: "RelationOrigin_"});
	};
return org_makumba_devel_relations_Relation__origin_


};
