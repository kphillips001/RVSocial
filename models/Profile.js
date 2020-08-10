const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  status: {
    type: String
  },
  rvtype: {
    type: String
  },
  wherefrom: {
    type: String
  },
  agerange: {
    type: String
  },
  bio: {
    type: String
  },
  kids: {
    type: String
  },
  pets: {
    type: String
  },
  favplaces: {
    type: [String]
  },
  advice: {
    type: [String]
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    website: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);