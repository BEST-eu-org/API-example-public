/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Wiki__history_ =  sequelize.define('general_Wiki__history_', {
    history_: {
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
    Wiki_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Wiki_',
        key: 'Wiki_'
      }
    },
    revision_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    author_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    diffDescription_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diff_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'general_Wiki__history_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_" },
        ]
      },
      {
        name: "history_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_" },
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
        name: "Wiki_",
        using: "BTREE",
        fields: [
          { name: "Wiki_" },
        ]
      },
      {
        name: "revision_",
        using: "BTREE",
        fields: [
          { name: "revision_" },
        ]
      },
      {
        name: "author_",
        using: "BTREE",
        fields: [
          { name: "author_" },
        ]
      },
      {
        name: "diffDescription_",
        using: "BTREE",
        fields: [
          { name: "diffDescription_" },
        ]
      },
    ]
  });
	general_Wiki__history_.associate = models => {
		general_Wiki__history_.belongsTo(models.general_Wiki_, { foreignKey: "Wiki_"});
		general_Wiki__history_.belongsTo(models.general_Person_, { foreignKey: "author_"});
	};
return general_Wiki__history_


};
