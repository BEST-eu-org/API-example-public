/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_hrtool_Team__members_ =  sequelize.define('best_internal_hrtool_Team__members_', {
    members_: {
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
    Team_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Team_',
        key: 'Team_'
      }
    },
    member_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    availability_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Status_',
        key: 'Status_'
      }
    },
    mentor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    isActive_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentorshipIsActive_: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_hrtool_Team__members_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "members_" },
        ]
      },
      {
        name: "members_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "members_" },
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
        name: "Team_",
        using: "BTREE",
        fields: [
          { name: "Team_" },
        ]
      },
      {
        name: "member_",
        using: "BTREE",
        fields: [
          { name: "member_" },
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
        name: "mentor_",
        using: "BTREE",
        fields: [
          { name: "mentor_" },
        ]
      },
      {
        name: "isActive_",
        using: "BTREE",
        fields: [
          { name: "isActive_" },
        ]
      },
      {
        name: "mentorshipIsActive_",
        using: "BTREE",
        fields: [
          { name: "mentorshipIsActive_" },
        ]
      },
    ]
  });
	best_internal_hrtool_Team__members_.associate = models => {
		best_internal_hrtool_Team__members_.belongsTo(models.best_internal_hrtool_Team_, { foreignKey: "Team_"});
		best_internal_hrtool_Team__members_.belongsTo(models.best_internal_Student_, { foreignKey: "member_"});
		best_internal_hrtool_Team__members_.belongsTo(models.best_internal_hrtool_Status_, { foreignKey: "status_"});
		best_internal_hrtool_Team__members_.belongsTo(models.general_Person_, { foreignKey: "mentor_"});
	};
return best_internal_hrtool_Team__members_


};
