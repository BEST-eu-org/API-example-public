/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const org_makumba_devel_relations_WebappDatabase_ =  sequelize.define('org_makumba_devel_relations_WebappDatabase_', {
    WebappDatabase_: {
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
    webappRoot_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    relationDatabase_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'org_makumba_devel_relations_WebappDatabase_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WebappDatabase_" },
        ]
      },
      {
        name: "WebappDatabase_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WebappDatabase_" },
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
        name: "webappRoot_",
        using: "BTREE",
        fields: [
          { name: "webappRoot_" },
        ]
      },
      {
        name: "relationDatabase_",
        using: "BTREE",
        fields: [
          { name: "relationDatabase_" },
        ]
      },
    ]
  });
	org_makumba_devel_relations_WebappDatabase_.associate = models => {
		org_makumba_devel_relations_WebappDatabase_.hasMany(models.org_makumba_devel_relations_Relation_, { foreignKey: "webapp_"});
	};
return org_makumba_devel_relations_WebappDatabase_


};
