import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    // match: [
    //   ,
    //   "Username invalid, it should contain alphanumeric letters and be unique!",
    // ],
  },
  image: {
    type: String,
  },
})

const User = models.Person || model("Person", UserSchema)

export default User
