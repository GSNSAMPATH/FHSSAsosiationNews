import {  Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import User from '../models/userModel';
import { IRequest } from '../models/IRequest';



const JWT_SECRET = process.env.JWT_SECRET || "e41a61f62fba0ea39087c995813417332573421223cb8182052c6417a47dc586";

const authMiddleware = (req: IRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '').trim();
    console.log('Token:', token);
    
    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

        const id = decoded.id
        console.log('User id:', id);
        req.user = { id };
    
        next();

    } catch (err: any) {
        console.error('Token verification error:', err.message);
        res.status(401).json({ message: 'Token is not valid', error: err.message });
    }
};


export default authMiddleware;

