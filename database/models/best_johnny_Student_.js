/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_johnny_Student_ =  sequelize.define('best_johnny_Student_', {
    Student_: {
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
    student__: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    canEmail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    validatingLBG_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Lbg_',
        key: 'Lbg_'
      }
    },
    validated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estimatedGraduation_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    localIdNumber_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    negotiated_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    studyEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    homeEmail_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    birthdate_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nationality_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    faculty_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    year_: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    homeAddress_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    homePhone_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    studyAddress_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    studyPhone_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    homeTime_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    studyTime_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    languages_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    english_: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    validatedUntil_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    altEmail_: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    mergeWithCodes_: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    englishRanked_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inTargetGroup_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shareEmail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shareMobilePhone_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shareSnailMail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shareMessengers_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shareBirthday_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shareArrivalDeparture_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bccPromotionMailSent_: {
      type: DataTypes.DATE,
      allowNull: true
    },
    adminComments_: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_johnny_Student_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Student_" },
        ]
      },
      {
        name: "Student_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Student_" },
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
        name: "student__",
        using: "BTREE",
        fields: [
          { name: "student__" },
        ]
      },
      {
        name: "canEmail_",
        using: "BTREE",
        fields: [
          { name: "canEmail_" },
        ]
      },
      {
        name: "validatingLBG_",
        using: "BTREE",
        fields: [
          { name: "validatingLBG_" },
        ]
      },
      {
        name: "validatedUntil_",
        using: "BTREE",
        fields: [
          { name: "validatedUntil_" },
        ]
      },
      {
        name: "localIdNumber_",
        using: "BTREE",
        fields: [
          { name: "localIdNumber_" },
        ]
      },
      {
        name: "negotiated_",
        using: "BTREE",
        fields: [
          { name: "negotiated_" },
        ]
      },
      {
        name: "state_",
        using: "BTREE",
        fields: [
          { name: "state_" },
        ]
      },
      {
        name: "studyEmail_",
        using: "BTREE",
        fields: [
          { name: "studyEmail_" },
        ]
      },
      {
        name: "homeEmail_",
        using: "BTREE",
        fields: [
          { name: "homeEmail_" },
        ]
      },
      {
        name: "altEmail_",
        using: "BTREE",
        fields: [
          { name: "altEmail_" },
        ]
      },
      {
        name: "birthdate_",
        using: "BTREE",
        fields: [
          { name: "birthdate_" },
        ]
      },
      {
        name: "nationality_",
        using: "BTREE",
        fields: [
          { name: "nationality_" },
        ]
      },
      {
        name: "faculty_",
        using: "BTREE",
        fields: [
          { name: "faculty_" },
        ]
      },
      {
        name: "year_",
        using: "BTREE",
        fields: [
          { name: "year_" },
        ]
      },
      {
        name: "homePhone_",
        using: "BTREE",
        fields: [
          { name: "homePhone_" },
        ]
      },
      {
        name: "studyPhone_",
        using: "BTREE",
        fields: [
          { name: "studyPhone_" },
        ]
      },
      {
        name: "homeTime_",
        using: "BTREE",
        fields: [
          { name: "homeTime_" },
        ]
      },
      {
        name: "studyTime_",
        using: "BTREE",
        fields: [
          { name: "studyTime_" },
        ]
      },
      {
        name: "english_",
        using: "BTREE",
        fields: [
          { name: "english_" },
        ]
      },
      {
        name: "mergeWithCodes_",
        using: "BTREE",
        fields: [
          { name: "mergeWithCodes_" },
        ]
      },
      {
        name: "englishRanked_",
        using: "BTREE",
        fields: [
          { name: "englishRanked_" },
        ]
      },
      {
        name: "inTargetGroup_",
        using: "BTREE",
        fields: [
          { name: "inTargetGroup_" },
        ]
      },
      {
        name: "shareEmail_",
        using: "BTREE",
        fields: [
          { name: "shareEmail_" },
        ]
      },
      {
        name: "shareMobilePhone_",
        using: "BTREE",
        fields: [
          { name: "shareMobilePhone_" },
        ]
      },
      {
        name: "shareSnailMail_",
        using: "BTREE",
        fields: [
          { name: "shareSnailMail_" },
        ]
      },
      {
        name: "shareMessengers_",
        using: "BTREE",
        fields: [
          { name: "shareMessengers_" },
        ]
      },
      {
        name: "shareBirthday_",
        using: "BTREE",
        fields: [
          { name: "shareBirthday_" },
        ]
      },
      {
        name: "shareArrivalDeparture_",
        using: "BTREE",
        fields: [
          { name: "shareArrivalDeparture_" },
        ]
      },
      {
        name: "bccPromotionMailSent_",
        using: "BTREE",
        fields: [
          { name: "bccPromotionMailSent_" },
        ]
      },
    ]
  });
	best_johnny_Student_.associate = models => {
		best_johnny_Student_.hasMany(models.best_johnny_Application_, { foreignKey: "stud_"});
		best_johnny_Student_.belongsTo(models.best_Student_, { foreignKey: "student__"});
		best_johnny_Student_.belongsTo(models.best_internal_Lbg_, { foreignKey: "validatingLBG_"});
	};
return best_johnny_Student_


};
