import mongoose from "mongoose";

export let dbConnect = async (res) => {
  try {
    await mongoose.connect(
      "mongodb://scopionjs:scopionjs@cluster0-shard-00-00.klfvs.mongodb.net:27017,cluster0-shard-00-01.klfvs.mongodb.net:27017,cluster0-shard-00-02.klfvs.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-k6x59u-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
  } catch (error) {
    if (error) {
      console.log(error.message);
      res.json({ error: error });
    }
  }
};

export let dbDisconnect = async (res) => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    res.json({ error: error });
    console.log(error);
  }
};
