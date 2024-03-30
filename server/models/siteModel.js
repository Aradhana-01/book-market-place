import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  surname: { type: String, trim: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  mobile: { type: Number, trim: true },
  DOB: { type: Date },
  //address proof
  roomno: { type: Number, trim: true },
  building: { type: String, trim: true },
  area: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  pincode: { type: Number, trim: true },
  country: { type: String, trim: true },
  //bank details
  ifsc: { type: String, trim: true },
  ac: { type: Number, trim: true },
  bank: { type: String, trim: true },
  imagename: { type: String },
  imageURL: { type: String, default: "" },
});

const bookSchenma = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  discount: { type: Number, required: true, trim: true },
  pages: { type: Number, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  imagename: { type: String, required: true },
  imageURL: { type: String },
});

//used while uploading..............book 
const wishlistSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  discount: { type: Number, required: true, trim: true },
  description: { type: String, required: true },
  country: { type: String, required: true, trim: true },
  id: { type: String, required: true },
  category: { type: String, required: true, trim: true },
  imagename: { type: String, required: true },
  imageURL: { type: String }, // Add the imageURL field
});

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  zip: { type: String, required: true, trim: true },
  product: { type: Array, required: true },
  ref: { type: String },
  orderId: { type: String, required: true },
  date: { type: Date },
});

const userModel = mongoose.model("User", userSchema);
const bookModel = mongoose.model("Books", bookSchenma);
const wishModel = mongoose.model("WishLists", wishlistSchema);
const orderModel = mongoose.model("Order", orderSchema);

export { userModel, bookModel, wishModel, orderModel };