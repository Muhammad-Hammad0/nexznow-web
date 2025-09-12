import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken, genToken1 } from "../config/token.js";

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "None" : "Lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  domain: "srv1000765.hstgr.cloud", // ✅ Add this for cross-domain cookie
};

// ==================== Registration ====================
export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Email Invalid" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Enter a Strong Password" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });
    const token = await genToken(user._id);

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Registration error", error);
    return res.status(500).json({ message: "Registration error" });
  }
};

// ==================== Login ====================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = await genToken(user._id);
    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ message: "Login error" });
  }
};

// ==================== Logout ====================
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", { ...cookieOptions });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error", error);
    return res.status(500).json({ message: "Logout error" });
  }
};

// ==================== Google Login ====================
export const googleLogin = async (req, res) => {
  try {
    let { name, email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }

    const token = await genToken(user._id);
    res.cookie("token", token, cookieOptions);

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("GoogleSignUp error", error);
    return res.status(500).json({ message: "GoogleSignUp error" });
  }
};

// ==================== Admin Login ====================
export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = await genToken1(email);

      res.cookie("adminToken", token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "None" : "Lax",
        maxAge: 1 * 24 * 60 * 60 * 1000,
        domain: "srv1000765.hstgr.cloud", // ✅ Added here
      });

      return res.status(200).json({ message: "Admin login successful" });
    }

    return res.status(400).json({ message: "Invalid Credentials" });
  } catch (error) {
    console.error("AdminLogin error", error);
    return res.status(500).json({ message: "AdminLogin error" });
  }
};
