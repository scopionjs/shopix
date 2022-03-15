import { userModel, storeModel, ProductModel } from "../../models/models";
import bcrypt from "bcrypt";
import { registeruser } from "../../controllers/controllers";
import { dbDisconnect, dbConnect } from "../../utils/db";
import nc from "next-connect";

let handler = nc();

handler.get(async (req, res) => {
  dbConnect();

  let data = await ProductModel.find({
    _id: req.query.id,
  }).lean();

  res.json({ data: data });
});
export default handler;
