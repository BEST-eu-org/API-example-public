/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Student__myLinks_ =  sequelize.define('best_internal_Student__myLinks_', {
    myLinks_: {
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
    url_: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    name_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linkOrder_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    linkType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    icon_: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Student__myLinks_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "myLinks_" },
        ]
      },
      {
        name: "myLinks_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "myLinks_" },
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
        name: "linkOrder_",
        using: "BTREE",
        fields: [
          { name: "linkOrder_" },
        ]
      },
      {
        name: "linkType_",
        using: "BTREE",
        fields: [
          { name: "linkType_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "icon_",
        using: "BTREE",
        fields: [
          { name: "icon_" },
        ]
      },
      {
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
    ]
  });
	best_internal_Student__myLinks_.associate = models => {
		best_internal_Student__myLinks_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return best_internal_Student__myLinks_


};
