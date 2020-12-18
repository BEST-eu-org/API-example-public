/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_TrackableLink__clicks_ =  sequelize.define('best_minerva_TrackableLink__clicks_', {
    clicks_: {
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
    TrackableLink_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_TrackableLink_',
        key: 'TrackableLink_'
      }
    },
    student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    ip_: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    countryName_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    countryCode_: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    cityName_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    regionName_: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_TrackableLink__clicks_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clicks_" },
        ]
      },
      {
        name: "clicks_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clicks_" },
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
        name: "TrackableLink_",
        using: "BTREE",
        fields: [
          { name: "TrackableLink_" },
        ]
      },
      {
        name: "student_",
        using: "BTREE",
        fields: [
          { name: "student_" },
        ]
      },
      {
        name: "ip_",
        using: "BTREE",
        fields: [
          { name: "ip_" },
        ]
      },
      {
        name: "countryName_",
        using: "BTREE",
        fields: [
          { name: "countryName_" },
        ]
      },
      {
        name: "countryCode_",
        using: "BTREE",
        fields: [
          { name: "countryCode_" },
        ]
      },
      {
        name: "cityName_",
        using: "BTREE",
        fields: [
          { name: "cityName_" },
        ]
      },
      {
        name: "regionName_",
        using: "BTREE",
        fields: [
          { name: "regionName_" },
        ]
      },
    ]
  });
	best_minerva_TrackableLink__clicks_.associate = models => {
		best_minerva_TrackableLink__clicks_.belongsTo(models.best_minerva_TrackableLink_, { foreignKey: "TrackableLink_"});
		best_minerva_TrackableLink__clicks_.belongsTo(models.best_Student_, { foreignKey: "student_"});
	};
return best_minerva_TrackableLink__clicks_


};
