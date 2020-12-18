/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Student__statusHistory_ =  sequelize.define('best_internal_Student__statusHistory_', {
    statusHistory_: {
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
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Status_',
        key: 'Status_'
      }
    },
    statusSince_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    statusTeam_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Team_',
        key: 'Team_'
      }
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_Student__statusHistory_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "statusHistory_" },
        ]
      },
      {
        name: "statusHistory_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "statusHistory_" },
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
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "statusSince_",
        using: "BTREE",
        fields: [
          { name: "statusSince_" },
        ]
      },
      {
        name: "statusTeam_",
        using: "BTREE",
        fields: [
          { name: "statusTeam_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	best_internal_Student__statusHistory_.associate = models => {
		best_internal_Student__statusHistory_.belongsTo(models.best_internal_hrtool_Status_, { foreignKey: "status_"});
		best_internal_Student__statusHistory_.belongsTo(models.best_internal_hrtool_Team_, { foreignKey: "statusTeam_"});
		best_internal_Student__statusHistory_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return best_internal_Student__statusHistory_


};
