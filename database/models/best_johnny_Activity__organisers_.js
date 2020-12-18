/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Activity__organisers_ =  sequelize.define('best_johnny_Activity__organisers_', {
    organisers_: {
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
    organiser_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    subscribedToMailingList_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    responsibility_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Activity__organisers_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "organisers_" },
        ]
      },
      {
        name: "organisers_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "organisers_" },
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
        name: "organiser_",
        using: "BTREE",
        fields: [
          { name: "organiser_" },
        ]
      },
      {
        name: "subscribedToMailingList_",
        using: "BTREE",
        fields: [
          { name: "subscribedToMailingList_" },
        ]
      },
      {
        name: "responsibility_",
        using: "BTREE",
        fields: [
          { name: "responsibility_" },
        ]
      },
    ]
  });
	best_johnny_Activity__organisers_.associate = models => {
		best_johnny_Activity__organisers_.belongsTo(models.best_johnny_Activity_, { foreignKey: "Activity_"});
		best_johnny_Activity__organisers_.belongsTo(models.best_internal_Student_, { foreignKey: "organiser_"});
	};
return best_johnny_Activity__organisers_


};
