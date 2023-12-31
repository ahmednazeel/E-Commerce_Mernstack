import mongoose from "mongoose";
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    rating: { type: Number, require: true },
    comment: { type: String, require: true },
  },
  {
    timeStamps: true,
  }
);
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    proDesc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews:[reviewSchema],
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);


const Product = mongoose.model('Product',productSchema);
export default Product