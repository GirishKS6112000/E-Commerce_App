import usermodel from "../database/model.js";

class User {
  //Sign Up
  static createUser = async (req, res) => {
    const user = await usermodel.findOne({ email: req.body.email });
    if (user) {
      res.json({
        status: "Account Creation Failed",
        message: "Email Already Existed",
      });
    }
    if (!req.body.name || !req.body.email || !req.body.password) {
      res.json({
        status: "Account Creation Failed",
        message: "Fill the email or password or name properly",
      });
    } else {
      const data = await usermodel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      await data.save();
      console.log(data);
      res.json(data);
    }
  };

  //Login
  static login = async (req, res) => {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email: email });
    if (!email || !password) {
      res.json({
        status: "Account Creation Failed",
        message: "Fill the email or password or name properly",
      });
    }

    if (user.email ===email) {
      res.json(user);
    }
  };
}

export default User;
