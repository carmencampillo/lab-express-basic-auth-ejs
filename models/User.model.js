const { Schema, model, trusted } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'username is required.'],
    unique: true
  },
  email: {
    type: String,
    required: [true,'Email is required.' ],
    unique: true,
    lowercase: true,
    trim: trusted
  },

  password: {
type: String,
required: [ true, 'password is required.']
  } ,
  
  
});

const User = model("User", userSchema);

module.exports = User;
