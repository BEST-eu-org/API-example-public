/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_contactdb_Contact__offersExchanged_ =  sequelize.define('best_contactdb_Contact__offersExchanged_', {
    offersExchanged_: {
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
    offer_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    offerSubmittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
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
    tableName: 'best_contactdb_Contact__offersExchanged_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "offersExchanged_" },
        ]
      },
      {
        name: "offersExchanged_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "offersExchanged_" },
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
        name: "offerSubmittedBy_",
        using: "BTREE",
        fields: [
          { name: "offerSubmittedBy_" },
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
	best_contactdb_Contact__offersExchanged_.associate = models => {
		best_contactdb_Contact__offersExchanged_.belongsTo(models.best_internal_Student_, { foreignKey: "offerSubmittedBy_"});
		best_contactdb_Contact__offersExchanged_.belongsTo(models.best_contactdb_Contact_, { foreignKey: "Contact_"});
	};
return best_contactdb_Contact__offersExchanged_


};
