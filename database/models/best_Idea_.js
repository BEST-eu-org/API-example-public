/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Idea_ =  sequelize.define('best_Idea_', {
    Idea_: {
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
    topic_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idea__: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    details_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sender_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StartDate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    originalAuthor_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    responsible_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    overview_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discussion_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mailingList_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_Idea_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Idea_" },
        ]
      },
      {
        name: "Idea_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Idea_" },
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
        name: "status_",
        using: "BTREE",
        fields: [
          { name: "status_" },
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
        name: "priority_",
        using: "BTREE",
        fields: [
          { name: "priority_" },
        ]
      },
      {
        name: "originalAuthor_",
        using: "BTREE",
        fields: [
          { name: "originalAuthor_" },
        ]
      },
      {
        name: "responsible_",
        using: "BTREE",
        fields: [
          { name: "responsible_" },
        ]
      },
      {
        name: "submittedBy_",
        using: "BTREE",
        fields: [
          { name: "submittedBy_" },
        ]
      },
      {
        name: "mailingList_",
        using: "BTREE",
        fields: [
          { name: "mailingList_" },
        ]
      },
    ]
  });
	best_Idea_.associate = models => {
		best_Idea_.belongsTo(models.best_internal_Student_, { foreignKey: "originalAuthor_"});
		best_Idea_.belongsTo(models.best_internal_Student_, { foreignKey: "responsible_"});
		best_Idea_.belongsTo(models.best_internal_Student_, { foreignKey: "submittedBy_"});
	};
return best_Idea_


};
