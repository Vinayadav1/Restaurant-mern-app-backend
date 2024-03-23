import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      dbName: "RESTURANT",
    })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
