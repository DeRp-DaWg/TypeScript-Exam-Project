import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});



// All recipes's properties available other than just id
CategorySchema.pre("find", function () {
  this.populate("recipes");
});

export default mongoose.model('Category', CategorySchema);
