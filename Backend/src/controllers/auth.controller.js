const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    const isUserExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (isUserExist) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hash,
    });
    const token = await jwt.sign(
      {
        _id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
    );
    res.cookie("token", token);

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
}



async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }
  const plainPassword = await bcrypt.compare(password, user.password);

  if (!plainPassword) {
    return res.status(401).json({
      message: "invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "login succussfully",
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function logoutUser(req,res) {
  res.clearCookie("token")
  res.status(200).json({ message: "User logged out successfully" })
}

async function accessProfile(req,res){
    res.status(200).json({
    "message":"token verified"
  })
}


module.exports = {
  registerUser,loginUser,logoutUser,accessProfile
};


