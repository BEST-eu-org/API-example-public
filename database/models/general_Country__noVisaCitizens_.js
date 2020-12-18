/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_Country__noVisaCitizens_ =  sequelize.define('general_Country__noVisaCitizens_', {
    noVisaCitizens_: {
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
    Country_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    },
    Country__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Country_',
        key: 'Country_'
      }
    }
  }, {
    sequelize,
    tableName: 'general_Country__noVisaCitizens_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "noVisaCitizens_" },
        ]
      },
      {
        name: "noVisaCitizens_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "noVisaCitizens_" },
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
        name: "Country_",
        using: "BTREE",
        fields: [
          { name: "Country_" },
        ]
      },
      {
        name: "Country__",
        using: "BTREE",
        fields: [
          { name: "Country__" },
        ]
      },
    ]
  });
	general_Country__noVisaCitizens_.associate = models => {
		general_Country__noVisaCitizens_.belongsTo(models.general_Country_, { foreignKey: "Country_"});
		general_Country__noVisaCitizens_.belongsTo(models.general_Country_, { foreignKey: "Country__"});
	};
return general_Country__noVisaCitizens_


};
