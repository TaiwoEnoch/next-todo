import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false } // Ensure this field is included
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);