import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IRequest } from '../models/IRequest';


// Register a new user
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, registationNumber, email, password,image } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new User({
            name,
            registationNumber,
            email,
            password: hashedPassword,
            image,
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login a user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('JWT_SECRET:', process.env.JWT_SECRET);


        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch');
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, "e41a61f62fba0ea39087c995813417332573421223cb8182052c6417a47dc586"!, { expiresIn: '1h' });
        console.log('Token generated:', token);
        console.log('User:', user);
        console.log('Sucssessful login');

        res.status(200).json({ token, user, message: 'Sucssessful login' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};


// Get user profile
export const getUserProfile = async (req: IRequest, res: Response): Promise<void> => {
        try {
            // Ensure req.user exists and contains the id
            if (!req.user || !req.user.id) {
                res.status(400).json({ message: 'User not authenticated' });
                return;
            }
    
            // Find the user by ID
            const user = await User.findById(req.user.id).select('-password'); // Exclude password field
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
    
            // Respond with user profile data
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    };
    
