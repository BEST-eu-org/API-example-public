/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_LbgApplication_ =  sequelize.define('best_internal_LbgApplication_', {
    LbgApplication_: {
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
    applicantLbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    motivationLetterText_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    appliedForIES_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    headers_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_LbgApplication_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LbgApplication_" },
        ]
      },
      {
        name: "LbgApplication_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LbgApplication_" },
        ]
      },
      {
        name: "applicantLbg_event",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "applicantLbg_" },
          { name: "event_" },
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
        name: "applicantLbg_",
        using: "BTREE",
        fields: [
          { name: "applicantLbg_" },
        ]
      },
      {
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
        ]
      },
      {
        name: "appliedForIES_",
        using: "BTREE",
        fields: [
          { name: "appliedForIES_" },
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
	best_internal_LbgApplication_.associate = models => {
		best_internal_LbgApplication_.belongsTo(models.best_internal_Lbg_, { foreignKey: "applicantLbg_"});
		best_internal_LbgApplication_.belongsTo(models.best_internal_Event_, { foreignKey: "event_"});
		best_internal_LbgApplication_.hasMany(models.best_internal_LbgApplication__budget_, { foreignKey: "LbgApplication_"});
		best_internal_LbgApplication_.hasMany(models.best_internal_LbgApplication__motivationLetterFile_, { foreignKey: "LbgApplication_"});
		best_internal_LbgApplication_.hasMany(models.best_internal_LbgApplication__period_, { foreignKey: "LbgApplication_"});
	};
return best_internal_LbgApplication_


};
