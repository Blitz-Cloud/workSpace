import mongoose from "mongoose";
import "dotenv/config";

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  car: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const Person = mongoose.model("Persons", personSchema);

export { Person };
