/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_wiki_Namespace_ =  sequelize.define('best_wiki_Namespace_', {
    Namespace_: {
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
    name_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_wiki_Namespace_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Namespace_" },
        ]
      },
      {
        name: "Namespace_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Namespace_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "description_",
        using: "BTREE",
        fields: [
          { name: "description_" },
        ]
      },
      {
        name: "team_",
        using: "BTREE",
        fields: [
          { name: "team_" },
        ]
      },
      {
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
    ]
  });
	best_wiki_Namespace_.associate = models => {
		best_wiki_Namespace_.belongsTo(models.general_Team_, { foreignKey: "team_"});
		best_wiki_Namespace_.hasMany(models.best_wiki_WikiPage_, { foreignKey: "namespace_"});
		best_wiki_Namespace_.hasMany(models.general_Project_, { foreignKey: "wiki_"});
	};
return best_wiki_Namespace_


};
