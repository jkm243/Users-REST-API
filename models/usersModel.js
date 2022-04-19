const mongoose = require("mongoose");

const UsersModel = mongoose.model(
  "user-api",
  {
    id: {
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    gerant: {
        type: String,
        required: true
    },
    forme_juridique: {
        id: {
            type: Number,
            required: true
        },
        libelle: {
            type: String,
            required: true
        }
    },
    secteur_intervention:
    {
        id: {
            type: Number,
            required: true
        },
        libelle: {
            type: String,
            required: true
        }
    },
    date_creation: {
        type: Date,
        default: Date.now
    },
    annee_experience: {
        type: Number,
        required: true
    }
  },
  "users"
);

module.exports = { UsersModel };