import { userModel, storeModel, ProductModel } from "../../../models/models";
import bcrypt from "bcrypt";
import { registeruser } from "../../../controllers/controllers";
import { dbDisconnect, dbConnect } from "../../../utils/db";
import nc from "next-connect";

let handler = nc();
handler.get(async (req, res) => {
  let category = req.query;
  let data = await ProductModel.find(category);
  res.status(200).json({ data: data });
});

export default handler;
