/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Activity__multiChoiseOptions3_ =  sequelize.define('best_johnny_Activity__multiChoiseOptions3_', {
    multiChoiseOptions3_: {
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
    Activity_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_johnny_Activity_',
        key: 'Activity_'
      }
    },
    options3_: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Activity__multiChoiseOptions3_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "multiChoiseOptions3_" },
        ]
      },
      {
        name: "multiChoiseOptions3_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "multiChoiseOptions3_" },
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
        name: "Activity_",
        using: "BTREE",
        fields: [
          { name: "Activity_" },
        ]
      },
      {
        name: "options3_",
        using: "BTREE",
        fields: [
          { name: "options3_" },
        ]
      },
    ]
  });
	best_johnny_Activity__multiChoiseOptions3_.associate = models => {
		best_johnny_Activity__multiChoiseOptions3_.belongsTo(models.best_johnny_Activity_, { foreignKey: "Activity_"});
	};
return best_johnny_Activity__multiChoiseOptions3_


};
