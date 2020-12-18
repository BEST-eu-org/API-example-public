/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_Contact__collaborations_ =  sequelize.define('best_contactdb_Contact__collaborations_', {
    collaborations_: {
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
    collaboration_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
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
    tableName: 'best_contactdb_Contact__collaborations_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collaborations_" },
        ]
      },
      {
        name: "collaborations_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "collaborations_" },
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
        name: "collaboration_",
        using: "BTREE",
        fields: [
          { name: "collaboration_" },
        ]
      },
      {
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
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
	best_contactdb_Contact__collaborations_.associate = models => {
		best_contactdb_Contact__collaborations_.belongsTo(models.best_contactdb_Contact_, { foreignKey: "Contact_"});
	};
return best_contactdb_Contact__collaborations_


};
