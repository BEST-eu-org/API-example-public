/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_UniversityRepresentative_ =  sequelize.define('best_minerva_UniversityRepresentative_', {
    UniversityRepresentative_: {
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
    authentication_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Auth_',
        key: 'Auth_'
      }
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    },
    function_: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_UniversityRepresentative_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UniversityRepresentative_" },
        ]
      },
      {
        name: "UniversityRepresentative_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UniversityRepresentative_" },
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
        name: "authentication_",
        using: "BTREE",
        fields: [
          { name: "authentication_" },
        ]
      },
      {
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
      {
        name: "function_",
        using: "BTREE",
        fields: [
          { name: "function_" },
        ]
      },
    ]
  });
	best_minerva_UniversityRepresentative_.associate = models => {
		best_minerva_UniversityRepresentative_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		best_minerva_UniversityRepresentative_.belongsTo(models.best_Auth_, { foreignKey: "authentication_"});
		best_minerva_UniversityRepresentative_.belongsTo(models.general_University_, { foreignKey: "university_"});
	};
return best_minerva_UniversityRepresentative_


};
