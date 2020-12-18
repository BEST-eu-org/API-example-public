/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const best_internal_tigro_Tiger_ =  sequelize.define('best_internal_tigro_Tiger_', {
    Tiger_: {
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
    bestie_: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'best_internal_Student_',
        key: 'Student_'
      }
    },
    membership_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigroInvolvement_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kitchen_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drink_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hobby_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pet_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    film_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    director_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    song_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    music_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    writer_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    quote_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tigerName_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerSurname_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerNickname_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerLBG_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerBirthdate_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerEmail_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerMembership_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerInvolvement_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerKitchen_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerDrink_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerHobby_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerPet_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerFilm_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerDirector_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerSong_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerMusic_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerWriter_: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tigerQuote_: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'best_internal_tigro_Tiger_',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Tiger_" },
        ]
      },
      {
        name: "Tiger_",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Tiger_" },
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
        name: "bestie_",
        using: "BTREE",
        fields: [
          { name: "bestie_" },
        ]
      },
      {
        name: "membership_",
        using: "BTREE",
        fields: [
          { name: "membership_" },
        ]
      },
      {
        name: "tigerName_",
        using: "BTREE",
        fields: [
          { name: "tigerName_" },
        ]
      },
      {
        name: "tigerSurname_",
        using: "BTREE",
        fields: [
          { name: "tigerSurname_" },
        ]
      },
      {
        name: "tigerNickname_",
        using: "BTREE",
        fields: [
          { name: "tigerNickname_" },
        ]
      },
      {
        name: "tigerLBG_",
        using: "BTREE",
        fields: [
          { name: "tigerLBG_" },
        ]
      },
      {
        name: "tigerBirthdate_",
        using: "BTREE",
        fields: [
          { name: "tigerBirthdate_" },
        ]
      },
      {
        name: "tigerEmail_",
        using: "BTREE",
        fields: [
          { name: "tigerEmail_" },
        ]
      },
      {
        name: "tigerMembership_",
        using: "BTREE",
        fields: [
          { name: "tigerMembership_" },
        ]
      },
      {
        name: "tigerInvolvement_",
        using: "BTREE",
        fields: [
          { name: "tigerInvolvement_" },
        ]
      },
      {
        name: "tigerKitchen_",
        using: "BTREE",
        fields: [
          { name: "tigerKitchen_" },
        ]
      },
      {
        name: "tigerDrink_",
        using: "BTREE",
        fields: [
          { name: "tigerDrink_" },
        ]
      },
      {
        name: "tigerHobby_",
        using: "BTREE",
        fields: [
          { name: "tigerHobby_" },
        ]
      },
      {
        name: "tigerPet_",
        using: "BTREE",
        fields: [
          { name: "tigerPet_" },
        ]
      },
      {
        name: "tigerFilm_",
        using: "BTREE",
        fields: [
          { name: "tigerFilm_" },
        ]
      },
      {
        name: "tigerDirector_",
        using: "BTREE",
        fields: [
          { name: "tigerDirector_" },
        ]
      },
      {
        name: "tigerSong_",
        using: "BTREE",
        fields: [
          { name: "tigerSong_" },
        ]
      },
      {
        name: "tigerMusic_",
        using: "BTREE",
        fields: [
          { name: "tigerMusic_" },
        ]
      },
      {
        name: "tigerWriter_",
        using: "BTREE",
        fields: [
          { name: "tigerWriter_" },
        ]
      },
      {
        name: "tigerQuote_",
        using: "BTREE",
        fields: [
          { name: "tigerQuote_" },
        ]
      },
    ]
  });
	best_internal_tigro_Tiger_.associate = models => {
		best_internal_tigro_Tiger_.belongsTo(models.best_internal_Student_, { foreignKey: "bestie_"});
	};
return best_internal_tigro_Tiger_


};
