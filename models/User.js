const { Schema, model} = require('mongoose'); 



const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            validate: {
              validator: function (v) {
                // Regular expression for email validation
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
              },
              message: 'Invalid email format',
            },
        },
        friends:[
            {
              type: Schema.Types.ObjectId,
              ref: 'User',
          }
        ],
          thoughts:[
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
          }
        ],
    },
    {
      toJSON: {
        virtuals: true, // enables virtual properties to be displayed when a user document is transformed into JSON format
      },
      id: false,
    }
)

// Creating the User model from the userSchema
const User = model('User',userSchema)
// Exporting the User model as a module
module.exports = User