import mongoose from "mongoose";
let Userschema = mongoose.Schema(
  {
    isVerified: {
      type: Boolean,
    },

    isActive: {
      type: Boolean,
      default: false,
    },
    sellerName: {
      type: String,
    },
    password: {
      type: String,
    },

    email: {
      type: String,
    },

    rating: {
      type: Number,
    },

    location: {
      type: String,
    },
    selfDescription: {
      type: String,
    },
  },
  { timestamps: true }
);
let userModel = mongoose.models?.user || mongoose.model("user", Userschema);
let storeSchema = mongoose.Schema({
  storeName: {
    type: String,
  },
  storeOwner: {
    type: Array,
    default: [],
  },
  products: {
    type: Array,
    default: [],
  },
  available: {
    type: String,
  },
  storeDescription: {
    type: String,
  },
  subscribers: {
    type: Array,
  },
});
let storeModel = mongoose.models?.store || mongoose.model("store", storeSchema);
let productSchema = mongoose.Schema({
  productOwnerId: {
    type: String,
  },
  productImageId: {
    type: String,
  },
  productCondition: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  isSold: {
    type: Boolean,
  },
  productsAvailable: {
    type: Number,
  },
  productName: {
    type: String,
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
    default: 1,
  },
});
let ProductModel =
  mongoose.models?.product || mongoose.model("product", productSchema);
export { userModel, storeModel, ProductModel };
