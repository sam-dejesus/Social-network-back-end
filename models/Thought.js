// imports from mongoose and from reaction model to help establish relationship
const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reaction');
// thought blueprint model  model being created from Schema
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username:{
            type: String,
            required: true
        },
        reactions:[reactionSchema],
        
    },
    {
        toJSON: {
            getters: true,
            virtuals: true, // enables virtual properties to be displayed when a user document is transformed into JSON format
        },
        id: false,// disables the '_id' field in the Thought model 
    }
);
// getter function that returns the length of the reactions field 
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});
// creates the Thought model from thoughtSchema
const Thought = model('Thought',thoughtSchema)
// Exporting the Thought model as a module
module.exports = Thought