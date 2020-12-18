/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_itc_RuDiana_ =  sequelize.define('best_internal_itc_RuDiana_', {
    RuDiana_: {
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
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    distance_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    message_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_itc_RuDiana_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RuDiana_" },
        ]
      },
      {
        name: "RuDiana_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RuDiana_" },
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "distance_",
        using: "BTREE",
        fields: [
          { name: "distance_" },
        ]
      },
    ]
  });
	best_internal_itc_RuDiana_.associate = models => {
		best_internal_itc_RuDiana_.belongsTo(models.general_Person_, { foreignKey: "person_"});
	};
return best_internal_itc_RuDiana_


};
