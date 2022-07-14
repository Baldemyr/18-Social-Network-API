const { Schema, model } = require('mongoose');
const opt = { toJSON: { virtuals: true, getters: true, id: false} };

const userSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },