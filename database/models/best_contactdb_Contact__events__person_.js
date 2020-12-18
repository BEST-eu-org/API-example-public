/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_Contact__events__person_ =  sequelize.define('best_contactdb_Contact__events__person_', {
    person_: {
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
    events_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_contactdb_Contact__events_',
        key: 'events_'
      }
    },
    Student_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_contactdb_Contact__events__person_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "person_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "person_" },
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
        name: "events_",
        using: "BTREE",
        fields: [
          { name: "events_" },
        ]
      },
      {
        name: "Student_",
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
    ]
  });
	best_contactdb_Contact__events__person_.associate = models => {
		best_contactdb_Contact__events__person_.belongsTo(models.best_contactdb_Contact__events_, { foreignKey: "events_"});
		best_contactdb_Contact__events__person_.belongsTo(models.best_internal_Student_, { foreignKey: "Student_"});
	};
return best_contactdb_Contact__events__person_


};
