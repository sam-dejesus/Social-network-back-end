// imports from mongoose
const { Schema, Types } = require('mongoose');
// reaction blueprint model being created from Schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleDateString()
    },
  },
  {
    toJSON: {
      getters: true, 
    },
    id: false,// disables the '_id' field in the Reaction model 
  }
);

//exporting the Reaction model as a module
module.exports = reactionSchema;