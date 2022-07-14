const { Schema, Types }=require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },