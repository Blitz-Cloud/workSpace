import { Person } from "../../server/models/mongo/model.js";
import mongoose from "mongoose";
import faker from "@faker-js/faker";
import "dotenv/config";

const db = "fakePeople";
console.log(process.env.DB);
mongoose.connect(`${process.env.DB}/${db}`).then(() => {
  console.log("Connection opened");
});

const seedDb = async function () {
  for (let i = 0; i < 50; i++) {
    await new Person({
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
      car: faker.vehicle.vehicle(),
      phone: faker.phone.phoneNumber(),
    }).save();
  }
};

seedDb().then(() => {
  console.log("Done saving closing the connections");
  mongoose.connection.close();
});
