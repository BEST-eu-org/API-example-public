/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_minerva_Company_ =  sequelize.define('best_minerva_Company_', {
    Company_: {
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    logo_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    dept_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    streetno_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    zipcode_: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    city_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    country_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fax_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    email_: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    homepage_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    hdquarter_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mothername_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    euroempl_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    euroscien_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    worldemp_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    worldscien_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    newhired_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eurcount_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    worldcount_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eurturn_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    worldturn_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addition1_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    culture_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    career_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salary_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mobility_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recruit_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    training_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addition2_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userType_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thumbnail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isactive_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deactivdate_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comp_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_company_Company_',
        key: 'Company_'
      }
    },
    generalProfile_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    historyWithBEST_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alumniOpinions_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_minerva_Company_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Company_" },
        ]
      },
      {
        name: "Company_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Company_" },
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
        name: "dept_",
        using: "BTREE",
        fields: [
          { name: "dept_" },
        ]
      },
      {
        name: "userType_",
        using: "BTREE",
        fields: [
          { name: "userType_" },
        ]
      },
      {
        name: "euroempl_",
        using: "BTREE",
        fields: [
          { name: "euroempl_" },
        ]
      },
      {
        name: "euroscien_",
        using: "BTREE",
        fields: [
          { name: "euroscien_" },
        ]
      },
      {
        name: "worldemp_",
        using: "BTREE",
        fields: [
          { name: "worldemp_" },
        ]
      },
      {
        name: "worldscien_",
        using: "BTREE",
        fields: [
          { name: "worldscien_" },
        ]
      },
      {
        name: "newhired_",
        using: "BTREE",
        fields: [
          { name: "newhired_" },
        ]
      },
      {
        name: "eurcount_",
        using: "BTREE",
        fields: [
          { name: "eurcount_" },
        ]
      },
      {
        name: "worldcount_",
        using: "BTREE",
        fields: [
          { name: "worldcount_" },
        ]
      },
      {
        name: "eurturn_",
        using: "BTREE",
        fields: [
          { name: "eurturn_" },
        ]
      },
      {
        name: "worldturn_",
        using: "BTREE",
        fields: [
          { name: "worldturn_" },
        ]
      },
      {
        name: "isactive_",
        using: "BTREE",
        fields: [
          { name: "isactive_" },
        ]
      },
      {
        name: "deactivdate_",
        using: "BTREE",
        fields: [
          { name: "deactivdate_" },
        ]
      },
      {
        name: "comp_",
        using: "BTREE",
        fields: [
          { name: "comp_" },
        ]
      },
    ]
  });
	best_minerva_Company_.associate = models => {
		best_minerva_Company_.hasMany(models.best_minerva_CareerNewsletter__offerFrom_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_CompanyRepresentative_, { foreignKey: "company_"});
		best_minerva_Company_.belongsTo(models.general_company_Company_, { foreignKey: "comp_"});
		best_minerva_Company_.hasMany(models.best_minerva_Company__activity_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Company__countries_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Company__cvExports_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Company__fields_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Company__searchLBGs_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Company__studentProfileViews_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Student__companyRestriction_, { foreignKey: "Company_"});
		best_minerva_Company_.hasMany(models.best_minerva_Student__companyViews_, { foreignKey: "company_"});
		best_minerva_Company_.hasMany(models.best_minerva_TrackableLink_, { foreignKey: "company_"});
	};
return best_minerva_Company_


};
