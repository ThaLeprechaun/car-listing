import mongoose from 'mongoose';

export interface CarSchema extends mongoose.Document {
  id: number | any;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  car_model: string;
  car_model_year: number;
  car_color: string;
  gender: string;
  job_title: string;
  bio: string;
}

const carSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  car_model: {
    type: String,
    required: true,
  },
  car_model_year: {
    type: String,
    required: true,
  },
  car_color: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

export default mongoose.model<CarSchema>('carOwners', carSchema);
