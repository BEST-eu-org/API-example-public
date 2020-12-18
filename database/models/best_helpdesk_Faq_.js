/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Faq_ =  sequelize.define('best_helpdesk_Faq_', {
    Faq_: {
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
    author_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_helpdesk_RequestType_',
        key: 'RequestType_'
      }
    },
    question_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    answer_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visibility_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Faq_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Faq_" },
        ]
      },
      {
        name: "Faq_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Faq_" },
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
        name: "author_",
        using: "BTREE",
        fields: [
          { name: "author_" },
        ]
      },
      {
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
      {
        name: "question_",
        using: "BTREE",
        fields: [
          { name: "question_" },
        ]
      },
      {
        name: "visibility_",
        using: "BTREE",
        fields: [
          { name: "visibility_" },
        ]
      },
    ]
  });
	best_helpdesk_Faq_.associate = models => {
		best_helpdesk_Faq_.belongsTo(models.best_internal_Student_, { foreignKey: "author_"});
		best_helpdesk_Faq_.belongsTo(models.best_helpdesk_RequestType_, { foreignKey: "category_"});
	};
return best_helpdesk_Faq_


};
