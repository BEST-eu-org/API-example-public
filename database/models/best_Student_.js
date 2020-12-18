/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_Student_ =  sequelize.define('best_Student_', {
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
    person_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'general_Person_',
        key: 'Person_'
      }
    },
    authentication_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Auth_',
        key: 'Auth_'
      }
    },
    partyWebpage_: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    military_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    driver_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profExperience_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    complementary_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extracurr_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    previousBEST_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hobbies_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    privateHobbies_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comment_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BESTenglishLevel_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bestMember_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proposedMergeWith_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_Student_',
        key: 'Student_'
      }
    },
    receiveCareerNewsletter_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    privateBASMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    privateBCCMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BCC_BASMerged_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasBAS_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasBCC_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasPA_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wantsToMerge_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    receiveStudyNewsletter_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    telegram_uid_: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_Student_',
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
        name: "person_",
        using: "BTREE",
        fields: [
          { name: "person_" },
        ]
      },
      {
        name: "authentication_",
        using: "BTREE",
        fields: [
          { name: "authentication_" },
        ]
      },
      {
        name: "partyWebpage_",
        using: "BTREE",
        fields: [
          { name: "partyWebpage_" },
        ]
      },
      {
        name: "military_",
        using: "BTREE",
        fields: [
          { name: "military_" },
        ]
      },
      {
        name: "driver_",
        using: "BTREE",
        fields: [
          { name: "driver_" },
        ]
      },
      {
        name: "BESTenglishLevel_",
        using: "BTREE",
        fields: [
          { name: "BESTenglishLevel_" },
        ]
      },
      {
        name: "bestMember_",
        using: "BTREE",
        fields: [
          { name: "bestMember_" },
        ]
      },
      {
        name: "proposedMergeWith_",
        using: "BTREE",
        fields: [
          { name: "proposedMergeWith_" },
        ]
      },
      {
        name: "receiveCareerNewsletter_",
        using: "BTREE",
        fields: [
          { name: "receiveCareerNewsletter_" },
        ]
      },
      {
        name: "hasBAS_",
        using: "BTREE",
        fields: [
          { name: "hasBAS_" },
        ]
      },
      {
        name: "hasBCC_",
        using: "BTREE",
        fields: [
          { name: "hasBCC_" },
        ]
      },
      {
        name: "hasPA_",
        using: "BTREE",
        fields: [
          { name: "hasPA_" },
        ]
      },
      {
        name: "wantsToMerge_",
        using: "BTREE",
        fields: [
          { name: "wantsToMerge_" },
        ]
      },
      {
        name: "receiveStudyNewsletter_",
        using: "BTREE",
        fields: [
          { name: "receiveStudyNewsletter_" },
        ]
      },
    ]
  });
	best_Student_.associate = models => {
		best_Student_.belongsTo(models.general_Person_, { foreignKey: "person_"});
		best_Student_.belongsTo(models.best_Auth_, { foreignKey: "authentication_"});
		best_Student_.belongsTo(models.best_Student_, { foreignKey: "proposedMergeWith_"});
		best_Student_.hasMany(models.best_Student_, { foreignKey: "proposedMergeWith_"});
		best_Student_.hasMany(models.best_Student__education_, { foreignKey: "Student_"});
		best_Student_.hasMany(models.best_Student__interests_, { foreignKey: "Student_"});
		best_Student_.hasMany(models.best_Student__lang_, { foreignKey: "Student_"});
		best_Student_.hasMany(models.best_internal_Student_, { foreignKey: "student__"});
		best_Student_.hasMany(models.best_johnny_Student_, { foreignKey: "student__"});
		best_Student_.hasMany(models.best_minerva_CareerNewsletter__recipients_, { foreignKey: "recipient_"});
		best_Student_.hasMany(models.best_minerva_Student_, { foreignKey: "student__"});
		best_Student_.hasMany(models.best_minerva_TrackableLink__clicks_, { foreignKey: "student_"});
	};
return best_Student_


};
