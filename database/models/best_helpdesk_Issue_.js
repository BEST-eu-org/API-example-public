/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Issue_ =  sequelize.define('best_helpdesk_Issue_', {
    Issue_: {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_RequestType_',
        key: 'RequestType_'
      }
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Issue_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Issue_" },
        ]
      },
      {
        name: "Issue_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Issue_" },
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
        name: "type_",
        using: "BTREE",
        fields: [
          { name: "type_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
    ]
  });
	best_helpdesk_Issue_.associate = models => {
		best_helpdesk_Issue_.belongsTo(models.best_helpdesk_RequestType_, { foreignKey: "type_"});
		best_helpdesk_Issue_.hasMany(models.best_helpdesk_Issue__history_, { foreignKey: "Issue_"});
		best_helpdesk_Issue_.hasMany(models.best_helpdesk_Request_, { foreignKey: "issueRef_"});
	};
return best_helpdesk_Issue_


};
