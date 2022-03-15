import { userModel, storeModel, ProductModel } from "../../models/models";
import bcrypt from "bcrypt";
import { registeruser } from "../../controllers/controllers";
import { dbDisconnect, dbConnect } from "../../utils/db";
import nc from "next-connect";

let handler = nc();
handler.post(async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  dbConnect();
  try {
    let emailExists = await userModel.find({ email: email });
    if (emailExists[0] == undefined) {
      res.json({ error: "account with that email does not exist" });
    } else {
      let isPasswordTrue = await bcrypt.compare(
        password,
        emailExists[0].password
      );
      if (isPasswordTrue == true) {
        res.json({ credentials: emailExists, message: "correct password" });
      } else if (isPasswordTrue == false) {
        res.json({ error: "wrong password" });
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});
export default handler;
