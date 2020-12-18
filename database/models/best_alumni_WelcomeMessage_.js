/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_alumni_WelcomeMessage_ =  sequelize.define('best_alumni_WelcomeMessage_', {
    WelcomeMessage_: {
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
    subject_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Team_',
        key: 'Team_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_alumni_WelcomeMessage_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WelcomeMessage_" },
        ]
      },
      {
        name: "WelcomeMessage_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "WelcomeMessage_" },
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
        name: "subject_",
        using: "BTREE",
        fields: [
          { name: "subject_" },
        ]
      },
      {
        name: "cc_",
        using: "BTREE",
        fields: [
          { name: "cc_" },
        ]
      },
    ]
  });
	best_alumni_WelcomeMessage_.associate = models => {
		best_alumni_WelcomeMessage_.belongsTo(models.general_Team_, { foreignKey: "cc_"});
	};
return best_alumni_WelcomeMessage_


};
