import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLenght: [3, "name must contain atleast 3 character"],
    maxLength: [30, "name cannot exceed 30 character"],
  },
  lastName: {
    type: String,
    required: true,
    minLenght: [3, "name must contain atleast 3 character"],
    maxLength: [30, "name cannot exceed 30 character"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  phone: {
    type: Number,
    required: true,
    minLenght: [10, "phone number should only contain 10 digits"],
    maxLength: [10, "phone number should only contain 10 digits"],
  },
});

export const reservation = mongoose.model("reservation", reservationSchema);
