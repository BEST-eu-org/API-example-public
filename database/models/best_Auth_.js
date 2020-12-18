/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Auth_ =  sequelize.define('best_Auth_', {
    Auth_: {
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
    username_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    n_username_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    n_username2_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shortname_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    n_password_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    original_username_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    original_n_username_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    original_n_username2_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    original_shortname_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    migratedCode_: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    karamba_username_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    privateJohnnyMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    privateMinervaMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minervaJohnnyMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passwordMD5_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordMD5Base64_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA1_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA1Base64_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA256_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA256Base64_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA384_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA384Base64_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA512_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    passwordSHA512Base64_: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emailToken_: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_Auth_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Auth_" },
        ]
      },
      {
        name: "Auth_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Auth_" },
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
        name: "username_",
        using: "BTREE",
        fields: [
          { name: "username_" },
        ]
      },
      {
        name: "n_username_",
        using: "BTREE",
        fields: [
          { name: "n_username_" },
        ]
      },
      {
        name: "shortname_",
        using: "BTREE",
        fields: [
          { name: "shortname_" },
        ]
      },
      {
        name: "migratedCode_",
        using: "BTREE",
        fields: [
          { name: "migratedCode_" },
        ]
      },
      {
        name: "karamba_username_",
        using: "BTREE",
        fields: [
          { name: "karamba_username_" },
        ]
      },
      {
        name: "passwordMD5_",
        using: "BTREE",
        fields: [
          { name: "passwordMD5_" },
        ]
      },
      {
        name: "passwordMD5Base64_",
        using: "BTREE",
        fields: [
          { name: "passwordMD5Base64_" },
        ]
      },
      {
        name: "passwordSHA1_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA1_" },
        ]
      },
      {
        name: "passwordSHA1Base64_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA1Base64_" },
        ]
      },
      {
        name: "passwordSHA256_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA256_" },
        ]
      },
      {
        name: "passwordSHA256Base64_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA256Base64_" },
        ]
      },
      {
        name: "passwordSHA384_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA384_" },
        ]
      },
      {
        name: "passwordSHA384Base64_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA384Base64_" },
        ]
      },
      {
        name: "passwordSHA512_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA512_" },
        ]
      },
      {
        name: "passwordSHA512Base64_",
        using: "BTREE",
        fields: [
          { name: "passwordSHA512Base64_" },
        ]
      },
      {
        name: "emailToken_",
        using: "BTREE",
        fields: [
          { name: "emailToken_" },
        ]
      },
    ]
  });
	best_Auth_.associate = models => {
		best_Auth_.hasMany(models.best_Auth__codes_, { foreignKey: "Auth_"});
		best_Auth_.hasMany(models.best_Student_, { foreignKey: "authentication_"});
		best_Auth_.hasMany(models.best_minerva_CompanyRepresentative_, { foreignKey: "authentication_"});
		best_Auth_.hasMany(models.best_minerva_UniversityRepresentative_, { foreignKey: "authentication_"});
		best_Auth_.hasMany(models.general_Session_, { foreignKey: "bestAuth_"});
		best_Auth_.hasMany(models.general_company_CompanyRepresentative_, { foreignKey: "authentication_"});
	};
return best_Auth_


};
