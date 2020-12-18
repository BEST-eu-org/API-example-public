/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Lbg__membershipHistory_ =  sequelize.define('best_internal_Lbg__membershipHistory_', {
    membershipHistory_: {
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
    Lbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    event_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Event_',
        key: 'Event_'
      }
    },
    nurse_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    doctor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    fromDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toDate_: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Lbg__membershipHistory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "membershipHistory_" },
        ]
      },
      {
        name: "membershipHistory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "membershipHistory_" },
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
        name: "Lbg_",
        using: "BTREE",
        fields: [
          { name: "Lbg_" },
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
        name: "event_",
        using: "BTREE",
        fields: [
          { name: "event_" },
        ]
      },
      {
        name: "nurse_",
        using: "BTREE",
        fields: [
          { name: "nurse_" },
        ]
      },
      {
        name: "doctor_",
        using: "BTREE",
        fields: [
          { name: "doctor_" },
        ]
      },
      {
        name: "fromDate_",
        using: "BTREE",
        fields: [
          { name: "fromDate_" },
        ]
      },
      {
        name: "toDate_",
        using: "BTREE",
        fields: [
          { name: "toDate_" },
        ]
      },
    ]
  });
	best_internal_Lbg__membershipHistory_.associate = models => {
		best_internal_Lbg__membershipHistory_.belongsTo(models.best_internal_Lbg_, { foreignKey: "Lbg_"});
		best_internal_Lbg__membershipHistory_.belongsTo(models.best_internal_Event_, { foreignKey: "event_"});
		best_internal_Lbg__membershipHistory_.belongsTo(models.best_internal_Lbg_, { foreignKey: "nurse_"});
		best_internal_Lbg__membershipHistory_.belongsTo(models.general_Person_, { foreignKey: "doctor_"});
	};
return best_internal_Lbg__membershipHistory_


};
