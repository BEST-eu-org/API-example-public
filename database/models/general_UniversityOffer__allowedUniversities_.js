/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const general_UniversityOffer__allowedUniversities_ =  sequelize.define('general_UniversityOffer__allowedUniversities_', {
    allowedUniversities_: {
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
    UniversityOffer_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_UniversityOffer_',
        key: 'UniversityOffer_'
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
    tableName: 'general_UniversityOffer__allowedUniversities_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "allowedUniversities_" },
        ]
      },
      {
        name: "allowedUniversities_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "allowedUniversities_" },
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
        name: "UniversityOffer_",
        using: "BTREE",
        fields: [
          { name: "UniversityOffer_" },
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
	general_UniversityOffer__allowedUniversities_.associate = models => {
		general_UniversityOffer__allowedUniversities_.belongsTo(models.general_UniversityOffer_, { foreignKey: "UniversityOffer_"});
		general_UniversityOffer__allowedUniversities_.belongsTo(models.general_University_, { foreignKey: "University_"});
	};
return general_UniversityOffer__allowedUniversities_


};
