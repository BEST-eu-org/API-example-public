/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_helpdesk_Solver_ =  sequelize.define('best_helpdesk_Solver_', {
    Solver_: {
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
    solver__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    template_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admin_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    byMail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_name_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    old_email_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    old_pwd_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    typesString_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_helpdesk_Solver_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Solver_" },
        ]
      },
      {
        name: "Solver_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Solver_" },
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
        name: "solver__",
        using: "BTREE",
        fields: [
          { name: "solver__" },
        ]
      },
      {
        name: "admin_",
        using: "BTREE",
        fields: [
          { name: "admin_" },
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
        name: "byMail_",
        using: "BTREE",
        fields: [
          { name: "byMail_" },
        ]
      },
    ]
  });
	best_helpdesk_Solver_.associate = models => {
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Issue__history_, { foreignKey: "statusModifiedBy_"});
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Reply_, { foreignKey: "bhsSender_"});
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Request_, { foreignKey: "solver_"});
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Request__history_, { foreignKey: "statusModifiedBy_"});
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Request__history_, { foreignKey: "typeModifiedBy_"});
		best_helpdesk_Solver_.belongsTo(models.best_internal_Student_, { foreignKey: "solver__"});
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Solver__myRatings_, { foreignKey: "Solver_"});
		best_helpdesk_Solver_.hasMany(models.best_helpdesk_Solver__types_, { foreignKey: "Solver_"});
	};
return best_helpdesk_Solver_


};
