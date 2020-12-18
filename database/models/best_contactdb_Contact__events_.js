/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_Contact__events_ =  sequelize.define('best_contactdb_Contact__events_', {
    events_: {
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
    event_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Contact_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_contactdb_Contact_',
        key: 'Contact_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_contactdb_Contact__events_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "events_" },
        ]
      },
      {
        name: "events_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "events_" },
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
    ]
  });
	best_contactdb_Contact__events_.associate = models => {
		best_contactdb_Contact__events_.belongsTo(models.best_contactdb_Contact_, { foreignKey: "Contact_"});
		best_contactdb_Contact__events_.hasMany(models.best_contactdb_Contact__events__person_, { foreignKey: "events_"});
	};
return best_contactdb_Contact__events_


};
