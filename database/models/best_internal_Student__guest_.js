/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Student__guest_ =  sequelize.define('best_internal_Student__guest_', {
    guest_: {
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
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    guestLbg_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    guestStart_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    guestEnd_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    guestType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_Student__guest_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guest_" },
        ]
      },
      {
        name: "guest_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guest_" },
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
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "guestLbg_",
        using: "BTREE",
        fields: [
          { name: "guestLbg_" },
        ]
      },
      {
        name: "guestStart_",
        using: "BTREE",
        fields: [
          { name: "guestStart_" },
        ]
      },
      {
        name: "guestEnd_",
        using: "BTREE",
        fields: [
          { name: "guestEnd_" },
        ]
      },
      {
        name: "guestType_",
        using: "BTREE",
        fields: [
          { name: "guestType_" },
        ]
      },
    ]
  });
	best_internal_Student__guest_.associate = models => {
		best_internal_Student__guest_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
		best_internal_Student__guest_.belongsTo(models.best_internal_Lbg_, { foreignKey: "guestLbg_"});
	};
return best_internal_Student__guest_


};
