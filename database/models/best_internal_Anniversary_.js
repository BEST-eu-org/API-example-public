/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Anniversary_ =  sequelize.define('best_internal_Anniversary_', {
    Anniversary_: {
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
    boardName_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    pageText_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    week_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_AnniversaryWeek_',
        key: 'AnniversaryWeek_'
      }
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastEdited_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastEditor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    rejectionReason_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Anniversary_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Anniversary_" },
        ]
      },
      {
        name: "Anniversary_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Anniversary_" },
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
        name: "boardName_",
        using: "BTREE",
        fields: [
          { name: "boardName_" },
        ]
      },
      {
        name: "lbg_",
        using: "BTREE",
        fields: [
          { name: "lbg_" },
        ]
      },
      {
        name: "week_",
        using: "BTREE",
        fields: [
          { name: "week_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "lastEdited_",
        using: "BTREE",
        fields: [
          { name: "lastEdited_" },
        ]
      },
      {
        name: "lastEditor_",
        using: "BTREE",
        fields: [
          { name: "lastEditor_" },
        ]
      },
    ]
  });
	best_internal_Anniversary_.associate = models => {
		best_internal_Anniversary_.belongsTo(models.best_internal_Lbg_, { foreignKey: "lbg_"});
		best_internal_Anniversary_.belongsTo(models.best_internal_AnniversaryWeek_, { foreignKey: "week_"});
		best_internal_Anniversary_.belongsTo(models.general_Person_, { foreignKey: "lastEditor_"});
		best_internal_Anniversary_.hasMany(models.best_internal_Anniversary__images_, { foreignKey: "Anniversary_"});
	};
return best_internal_Anniversary_


};
