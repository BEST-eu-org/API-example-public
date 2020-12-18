/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_eec_competition_Task_ =  sequelize.define('best_internal_eec_competition_Task_', {
    Task_: {
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
    name_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shortDescription_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    neededTime_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minSizeOfGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxSizeOfGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    materials_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    downloads_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    submittedBy_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    category_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_eec_competition_Category_',
        key: 'Category_'
      }
    },
    attachment_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_archive_File_',
        key: 'File_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_eec_competition_Task_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Task_" },
        ]
      },
      {
        name: "Task_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Task_" },
        ]
      },
      {
        name: "name_category",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name_" },
          { name: "category_" },
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
        name: "name_",
        using: "BTREE",
        fields: [
          { name: "name_" },
        ]
      },
      {
        name: "neededTime_",
        using: "BTREE",
        fields: [
          { name: "neededTime_" },
        ]
      },
      {
        name: "minSizeOfGroup_",
        using: "BTREE",
        fields: [
          { name: "minSizeOfGroup_" },
        ]
      },
      {
        name: "maxSizeOfGroup_",
        using: "BTREE",
        fields: [
          { name: "maxSizeOfGroup_" },
        ]
      },
      {
        name: "downloads_",
        using: "BTREE",
        fields: [
          { name: "downloads_" },
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
        name: "category_",
        using: "BTREE",
        fields: [
          { name: "category_" },
        ]
      },
      {
        name: "attachment_",
        using: "BTREE",
        fields: [
          { name: "attachment_" },
        ]
      },
    ]
  });
	best_internal_eec_competition_Task_.associate = models => {
		best_internal_eec_competition_Task_.belongsTo(models.general_Person_, { foreignKey: "submittedBy_"});
		best_internal_eec_competition_Task_.belongsTo(models.best_internal_eec_competition_Category_, { foreignKey: "category_"});
		best_internal_eec_competition_Task_.belongsTo(models.general_archive_File_, { foreignKey: "attachment_"});
		best_internal_eec_competition_Task_.hasMany(models.best_internal_eec_competition_Task__comments_, { foreignKey: "Task_"});
	};
return best_internal_eec_competition_Task_


};
