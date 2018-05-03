var db = require('../db');

var User = db.model('User', {
  username: { type: String, required: true },
  password: { type: String, required: false, select: false },
  gender: {
    sex: { type: Number, required: true, default: 100 },
    identity: { type: Number, required: true, default: 100 },
    expression: { type: Number, required: true, default: 100 },
    sexualAttraction: { type: Number, required: true, default: 100 },
    romanticAttraction: { type: Number, required: true, default: 100 },
  },
  displayName:{ type: String, required: false },
  email: { type: String, required: false },
  photoURL: { type: String, required: false },
  emailVerified: { type: Boolean, required: false },
  uid: { type: String, required: false },
  birthDate: { type: Date, required: false },
});

module.exports = User;
