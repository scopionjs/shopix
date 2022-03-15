import { userModel, storeModel, ProductModel } from "../../models/models";
import axios from "axios";
import bcrypt from "bcrypt";
import { registeruser } from "../../controllers/controllers";
import { dbDisconnect, dbConnect } from "../../utils/db";
import nc from "next-connect";

let handler = nc();
handler
  .post(async (req, res) => {
    let productName = req.body.productName;
    let productImage = req.body.productImage;

    dbConnect();
    try {
      let product = await ProductModel.create(req.body);
      res.json({ your: product });
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  .get(async (req, res) => {
    let arg = req.string ? req.string : {};
    dbConnect();
    let data = await ProductModel.find(arg);
    let data2 = await axios.get("http://localhost:3000/api/amazon");
    res.json({ data: data, data2: data2.data });
  });

export default handler;
