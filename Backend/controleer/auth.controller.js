import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import CreateEvent from "../../frontend/src/Events/CreateEvent.js";
export const Login=async (req,res)=>{
    try{
   const {email,password}=res.body?.userData;
   if(!email || !password){
    return res.json({sucess:false,error:"All fileds required"})
   }

   const isUserExist=await User.findone({email:email})
   if(!isUserExist){
    return res.json({sucess:false,error:"email not found"})
   }

   const isPasswordCorrect =await bcrypt.compare(
    password,
    isUserExist.password
   )

   if(!isPasswordCorrect){
    return res.json({sucess:false,error:"password not correct"})
   }

   const userData = {
    name: isUserExists.name,
    email: isUserExists.email,
    role: "user",
    userId : isUserExists._id
  };
  const token=jwt.sign(
    {userId:isUserExist._,id},
    process.env.JWT_SECRET
  );
  res.cookie("token",token);
  return res.json({
    sucess:true,
    message:"Login sucessfully",
    userData,
  })
 
} catch (error) {
  return res.json({ success: false, error: error });
}
};

export const Register = async (req, res) => {
    try {
      const { name, email, password } = req.body.userData;
      if (!name || !email || !password) {
        return res.json({ success: false, error: "All fields are required." });
      }
      // check to check email is exists - findOne / find
      const isEmailExist = await User.findOne({ email: email });
      console.log(isEmailExist, "isEmailExist");
      if (isEmailExist) {
        return res.json({
          success: false,
          error: "Email is exists, please use another one.",
        });
      }
      // encrypt the password then store it in mongodb
  
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        name: name,
        email: email,
        password: encryptedPassword,
      });
  
      const responseFromDb = await newUser.save();
  
      return res.json({
        success: true,
        message: "Registeration Successfull.",
      });
    } catch (error) {
      console.log(error, "error");
      return res.json({ error: error, success: false });
    }
  };

  export const getCurrentUser = async (req, res) => {
  };
  
   export  const  CreateEvent=async(req,res)=>{
    try{
        const { title, description, date, location, image, price } = req.body.CreateEvent;
        const newEvent = new Event({ title, description, date, location, image, price });
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    }
    catch(error){
        res.status(500).json({ message: 'Error creating event', error });
    }

  }
  export const getAllEvents = async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching events', error });
    }
  };
  export const updateEvents=async (req,res)=>{
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) {
          return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
      } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
      }
    };
    
  export const deletedEvent=async(req,res)=>{
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
          return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
      }
    };
  
