/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_Contact_ =  sequelize.define('best_contactdb_Contact_', {
    Contact_: {
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
    contact__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Contact_',
        key: 'Contact_'
      },
      unique: "best_contactdb_Contact__ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'best_contactdb_Contact_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
      {
        name: "Contact_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Contact_" },
        ]
      },
      {
        name: "contact__",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact__" },
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
    ]
  });
	best_contactdb_Contact_.associate = models => {
		best_contactdb_Contact_.belongsTo(models.general_Contact_, { foreignKey: "contact__"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__areaOfExpertises_, { foreignKey: "Contact_"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__collaborations_, { foreignKey: "Contact_"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__contactPersons_, { foreignKey: "Contact_"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__events_, { foreignKey: "Contact_"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__interests_, { foreignKey: "Contact_"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__offersExchanged_, { foreignKey: "Contact_"});
		best_contactdb_Contact_.hasMany(models.best_contactdb_Contact__organisations_, { foreignKey: "Contact_"});
	};
return best_contactdb_Contact_


};
