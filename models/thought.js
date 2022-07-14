const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 250
    },