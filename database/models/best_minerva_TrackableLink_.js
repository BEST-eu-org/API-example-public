/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_TrackableLink_ =  sequelize.define('best_minerva_TrackableLink_', {
    TrackableLink_: {
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
    url_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    company_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_Company_',
        key: 'Company_'
      }
    },
    description_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visibility_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    university_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_University_',
        key: 'University_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_TrackableLink_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrackableLink_" },
        ]
      },
      {
        name: "TrackableLink_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrackableLink_" },
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
        name: "url_",
        using: "BTREE",
        fields: [
          { name: "url_" },
        ]
      },
      {
        name: "createdBy_",
        using: "BTREE",
        fields: [
          { name: "createdBy_" },
        ]
      },
      {
        name: "company_",
        using: "BTREE",
        fields: [
          { name: "company_" },
        ]
      },
      {
        name: "description_",
        using: "BTREE",
        fields: [
          { name: "description_" },
        ]
      },
      {
        name: "visibility_",
        using: "BTREE",
        fields: [
          { name: "visibility_" },
        ]
      },
      {
        name: "university_",
        using: "BTREE",
        fields: [
          { name: "university_" },
        ]
      },
    ]
  });
	best_minerva_TrackableLink_.associate = models => {
		best_minerva_TrackableLink_.belongsTo(models.best_internal_Student_, { foreignKey: "createdBy_"});
		best_minerva_TrackableLink_.belongsTo(models.best_minerva_Company_, { foreignKey: "company_"});
		best_minerva_TrackableLink_.belongsTo(models.general_University_, { foreignKey: "university_"});
		best_minerva_TrackableLink_.hasMany(models.best_minerva_TrackableLink__clicks_, { foreignKey: "TrackableLink_"});
	};
return best_minerva_TrackableLink_


};
