import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  done: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    required: true,
    default: 0
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;