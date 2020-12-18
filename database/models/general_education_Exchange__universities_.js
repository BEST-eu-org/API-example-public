/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_education_Exchange__universities_ =  sequelize.define('general_education_Exchange__universities_', {
    universities_: {
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
    Exchange_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_education_Exchange_',
        key: 'Exchange_'
      }
    },
    University_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_education_Exchange__universities_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "universities_" },
        ]
      },
      {
        name: "universities_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "universities_" },
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
        name: "Exchange_",
        using: "BTREE",
        fields: [
          { name: "Exchange_" },
        ]
      },
      {
        name: "University_",
        using: "BTREE",
        fields: [
          { name: "University_" },
        ]
      },
    ]
  });
	general_education_Exchange__universities_.associate = models => {
		general_education_Exchange__universities_.belongsTo(models.general_education_Exchange_, { foreignKey: "Exchange_"});
		general_education_Exchange__universities_.belongsTo(models.general_University_, { foreignKey: "University_"});
	};
return general_education_Exchange__universities_


};
