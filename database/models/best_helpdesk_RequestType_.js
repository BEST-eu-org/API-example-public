/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_RequestType_ =  sequelize.define('best_helpdesk_RequestType_', {
    RequestType_: {
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
      type: DataTypes.STRING(60),
      allowNull: true
    },
    visible_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sortOrder_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    color_: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_RequestType_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RequestType_" },
        ]
      },
      {
        name: "RequestType_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RequestType_" },
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
        name: "visible_",
        using: "BTREE",
        fields: [
          { name: "visible_" },
        ]
      },
      {
        name: "sortOrder_",
        using: "BTREE",
        fields: [
          { name: "sortOrder_" },
        ]
      },
      {
        name: "color_",
        using: "BTREE",
        fields: [
          { name: "color_" },
        ]
      },
    ]
  });
	best_helpdesk_RequestType_.associate = models => {
		best_helpdesk_RequestType_.hasMany(models.best_helpdesk_Faq_, { foreignKey: "category_"});
		best_helpdesk_RequestType_.hasMany(models.best_helpdesk_Issue_, { foreignKey: "type_"});
		best_helpdesk_RequestType_.hasMany(models.best_helpdesk_Request_, { foreignKey: "type_"});
		best_helpdesk_RequestType_.hasMany(models.best_helpdesk_Request__history_, { foreignKey: "typeModifiedTo_"});
		best_helpdesk_RequestType_.hasMany(models.best_helpdesk_Solver__types_, { foreignKey: "RequestType_"});
	};
return best_helpdesk_RequestType_


};
