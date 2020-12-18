/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_Contact__interests_ =  sequelize.define('best_contactdb_Contact__interests_', {
    interests_: {
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
    Contact_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_contactdb_Contact_',
        key: 'Contact_'
      }
    },
    AreaOfInterest_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_contactdb_AreaOfInterest_',
        key: 'AreaOfInterest_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_contactdb_Contact__interests_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "interests_" },
        ]
      },
      {
        name: "interests_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "interests_" },
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
        name: "Contact_",
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
      {
        name: "AreaOfInterest_",
        using: "BTREE",
        fields: [
          { name: "AreaOfInterest_" },
        ]
      },
    ]
  });
	best_contactdb_Contact__interests_.associate = models => {
		best_contactdb_Contact__interests_.belongsTo(models.best_contactdb_Contact_, { foreignKey: "Contact_"});
		best_contactdb_Contact__interests_.belongsTo(models.best_contactdb_AreaOfInterest_, { foreignKey: "AreaOfInterest_"});
	};
return best_contactdb_Contact__interests_


};
