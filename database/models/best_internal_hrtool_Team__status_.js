/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_hrtool_Team__status_ =  sequelize.define('best_internal_hrtool_Team__status_', {
    status_: {
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
    Status__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_hrtool_Status_',
        key: 'Status_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_hrtool_Team__status_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_" },
        ]
      },
      {
        name: "status_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_" },
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
        name: "Status__",
        using: "BTREE",
        fields: [
          { name: "Status__" },
        ]
      },
    ]
  });
	best_internal_hrtool_Team__status_.associate = models => {
		best_internal_hrtool_Team__status_.belongsTo(models.best_internal_hrtool_Team_, { foreignKey: "Team_"});
		best_internal_hrtool_Team__status_.belongsTo(models.best_internal_hrtool_Status_, { foreignKey: "Status__"});
	};
return best_internal_hrtool_Team__status_


};
