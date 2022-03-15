import { userModel, storeModel, ProductModel } from "../../models/models";
import bcrypt from "bcrypt";
import { registeruser } from "../../controllers/controllers";
import { dbDisconnect, dbConnect } from "../../utils/db";
import nc from "next-connect";
let handler = nc();
handler
  .get((req, res) => {
    res.status(200).json({ req: "get" });
  })
  .post(async (req, res) => {
    dbConnect(res);
    let password = req.body.password;
    let email = req.body.email;
    let sellerName = req.body.sellerName;
    let replicas = await userModel.find({ email: email });
    if (replicas[0] == undefined) {
      try {
        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(password, salt);
        let createdSeller = await userModel.create({
          sellerName: sellerName,
          email: email,
          password: hashedPassword,

          isVerified: false,
          selfDescription: "hi i am a seller",
        });
        res.json({ createdSeller: createdSeller });
        //!dbDisconnect(res);
      } catch (error) {
        res.json({ error: error.message });
        //!dbDisconnect(res);
      }
    } else {
      res.json({ error: "email already exists" });
      //!SdbDisconnect(res);
    }

    //res.status(200).json({ req: "post" });
  });
export default handler;
