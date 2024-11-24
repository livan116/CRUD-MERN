// handling requesting processing data and generating response

import User from "../models/userModel.js";

export const create = async(req,res)=>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;
        console.log(newUser)
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }
        const savedData = await newUser.save();
        // res.status(200).json(savedData)
        res.status(200).json({
            message:"User created successfully"
        })
    }
    catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

export const getAllUsers = async(req,res)=>{
    try{
        const userData = await User.find();
        if(!userData || userData.length === 0){
            res.status(404).json({message:"user data not found"})
        }
        res.status(200).json(userData)  
    }
    catch(error){
        res.status(500).json({errorMessage:error.message})
    }
}

export const getUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if(!userExists){
            res.status(404).json({message:"user not found"})
        }
        res.status(200).json(userExists)
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const updateUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if(!userExists){
            res.status(404).json({message:"user not found"})
        }
        
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true}) //new:true to send the updated information rather than the original
        // res.status(200).json(updatedData)
        res.status(200).json({message:"User updated succesfully"})

    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if(!userExists){
            res.status(404).json({message:"user not found"})
        }
        
        await User.findByIdAndDelete(id) 
        res.status(200).json({message:"user deleted succesfully"})
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
} 