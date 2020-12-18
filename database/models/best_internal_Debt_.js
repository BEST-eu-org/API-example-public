/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Debt_ =  sequelize.define('best_internal_Debt_', {
    Debt_: {
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
    debitor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    receiver_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    reason_: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    paid_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Debt_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Debt_" },
        ]
      },
      {
        name: "Debt_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Debt_" },
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
        name: "debitor_",
        using: "BTREE",
        fields: [
          { name: "debitor_" },
        ]
      },
      {
        name: "receiver_",
        using: "BTREE",
        fields: [
          { name: "receiver_" },
        ]
      },
      {
        name: "reason_",
        using: "BTREE",
        fields: [
          { name: "reason_" },
        ]
      },
      {
        name: "paid_",
        using: "BTREE",
        fields: [
          { name: "paid_" },
        ]
      },
    ]
  });
	best_internal_Debt_.associate = models => {
		best_internal_Debt_.belongsTo(models.best_internal_Student_, { foreignKey: "debitor_"});
		best_internal_Debt_.belongsTo(models.best_internal_Student_, { foreignKey: "receiver_"});
	};
return best_internal_Debt_


};
