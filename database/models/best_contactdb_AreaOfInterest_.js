/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_AreaOfInterest_ =  sequelize.define('best_contactdb_AreaOfInterest_', {
    AreaOfInterest_: {
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
    area_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_contactdb_AreaOfInterest_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AreaOfInterest_" },
        ]
      },
      {
        name: "AreaOfInterest_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AreaOfInterest_" },
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
        name: "area_",
        using: "BTREE",
        fields: [
          { name: "area_" },
        ]
      },
    ]
  });
	best_contactdb_AreaOfInterest_.associate = models => {
		best_contactdb_AreaOfInterest_.hasMany(models.best_contactdb_Contact__interests_, { foreignKey: "AreaOfInterest_"});
	};
return best_contactdb_AreaOfInterest_


};
