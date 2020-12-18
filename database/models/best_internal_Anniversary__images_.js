/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_Anniversary__images_ =  sequelize.define('best_internal_Anniversary__images_', {
    images_: {
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
    Anniversary_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Anniversary_',
        key: 'Anniversary_'
      }
    },
    Image_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Image_',
        key: 'Image_'
      }
    }
  }, {
    sequelize,
    tableName: 'best_internal_Anniversary__images_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "images_" },
        ]
      },
      {
        name: "images_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "images_" },
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
        name: "Anniversary_",
        using: "BTREE",
        fields: [
          { name: "Anniversary_" },
        ]
      },
      {
        name: "Image_",
        using: "BTREE",
        fields: [
          { name: "Image_" },
        ]
      },
    ]
  });
	best_internal_Anniversary__images_.associate = models => {
		best_internal_Anniversary__images_.belongsTo(models.best_internal_Anniversary_, { foreignKey: "Anniversary_"});
		best_internal_Anniversary__images_.belongsTo(models.general_Image_, { foreignKey: "Image_"});
	};
return best_internal_Anniversary__images_


};
