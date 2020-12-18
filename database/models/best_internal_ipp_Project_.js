/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_ipp_Project_ =  sequelize.define('best_internal_ipp_Project_', {
    Project_: {
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
    generalProject_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Project_',
        key: 'Project_'
      }
    },
    coordinator_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    applicationStatus_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    applicationStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    applicationDeadline_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    applicationLink_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isCancelled_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_ipp_Project_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Project_" },
        ]
      },
      {
        name: "Project_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Project_" },
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
        name: "generalProject_",
        using: "BTREE",
        fields: [
          { name: "generalProject_" },
        ]
      },
      {
        name: "coordinator_",
        using: "BTREE",
        fields: [
          { name: "coordinator_" },
        ]
      },
      {
        name: "applicationStatus_",
        using: "BTREE",
        fields: [
          { name: "applicationStatus_" },
        ]
      },
      {
        name: "applicationStart_",
        using: "BTREE",
        fields: [
          { name: "applicationStart_" },
        ]
      },
      {
        name: "applicationDeadline_",
        using: "BTREE",
        fields: [
          { name: "applicationDeadline_" },
        ]
      },
      {
        name: "applicationLink_",
        using: "BTREE",
        fields: [
          { name: "applicationLink_" },
        ]
      },
      {
        name: "isCancelled_",
        using: "BTREE",
        fields: [
          { name: "isCancelled_" },
        ]
      },
    ]
  });
	best_internal_ipp_Project_.associate = models => {
		best_internal_ipp_Project_.belongsTo(models.general_Project_, { foreignKey: "generalProject_"});
		best_internal_ipp_Project_.belongsTo(models.best_internal_Student_, { foreignKey: "coordinator_"});
	};
return best_internal_ipp_Project_


};
