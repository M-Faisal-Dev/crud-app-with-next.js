import mongoose from 'mongoose';

const { Schema } = mongoose;

// Check if the model has already been defined
const Form = mongoose.models.Form || mongoose.model('Form', new Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    
  },
  message:{
    type: String,
    required: true,
  }

}));

export default Form;
