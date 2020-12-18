/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_CareerNewsletter__recipients_ =  sequelize.define('best_minerva_CareerNewsletter__recipients_', {
    recipients_: {
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
    recipient_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    emailReceived_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CareerNewsletter_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_minerva_CareerNewsletter_',
        key: 'CareerNewsletter_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_minerva_CareerNewsletter__recipients_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recipients_" },
        ]
      },
      {
        name: "recipients_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recipients_" },
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
        name: "recipient_",
        using: "BTREE",
        fields: [
          { name: "recipient_" },
        ]
      },
      {
        name: "emailReceived_",
        using: "BTREE",
        fields: [
          { name: "emailReceived_" },
        ]
      },
      {
        name: "CareerNewsletter_",
        using: "BTREE",
        fields: [
          { name: "CareerNewsletter_" },
        ]
      },
    ]
  });
	best_minerva_CareerNewsletter__recipients_.associate = models => {
		best_minerva_CareerNewsletter__recipients_.belongsTo(models.best_Student_, { foreignKey: "recipient_"});
		best_minerva_CareerNewsletter__recipients_.belongsTo(models.best_minerva_CareerNewsletter_, { foreignKey: "CareerNewsletter_"});
	};
return best_minerva_CareerNewsletter__recipients_


};
