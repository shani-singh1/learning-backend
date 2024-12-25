import {User} from "../models/user.js"
import bcrypt from 'bcrypt'

export const register = async (req, res) =>{
    try{
        const {fullName, email, password} = req.body;

        if(!fullName || !email || !password){
            return res.status(403).json({
                success: false,
                message:"All fields are required !"
            });
        }
        const user = await User.findOne({email});
        if (user){
            return res.status(403).json({
                success: false,
                message:"This email is already registered!"
        }); 
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        fullName,
        email,
        password: hashedPassword
    })
     return res.status(201).json({
        success : true,
        message : "User cretead successfully !"
     })
    }catch(error){
        console.log(error);
        
    }
}

export const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message:"All fields are required !"
            });
        }
        
        const user = await User.findOne({email});
        if (!user){
            return res.status(403).json({
                success: false,
                message:"Incorrect email or password !"
        }); 
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if(!isPasswordMatched){
        return res.json({
            success:false,
            message:"Email or password is Incorrect !"
        })
    }
    return res.status(200).json({
        success:true,
        message:`Welcome 🎉 back ${user.fullName}`
    })
    }catch(error){
        console.log(error);
        
    }
}