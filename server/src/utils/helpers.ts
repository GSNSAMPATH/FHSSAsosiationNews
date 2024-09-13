import { Response } from 'express';
import bcrypt from 'bcrypt';

// Helper function for sending success responses
export const sendSuccessResponse = (res: Response, data: any, message: string = 'Success', statusCode: number = 200): void => {
    res.status(statusCode).json({
        status: 'success',
        message,
        data,
    });
};

// Helper function for sending error responses
export const sendErrorResponse = (res: Response, error: any, message: string = 'Error', statusCode: number = 500): void => {
    res.status(statusCode).json({
        status: 'error',
        message,
        error: error.message || error,
    });
};

// Helper function for generating a random token (e.g., for passwords or verification tokens)
export const generateRandomToken = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        token += chars[randomIndex];
    }
    return token;
};

// Helper function for hashing passwords (using bcrypt)


export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

// Helper function for comparing hashed passwords (using bcrypt)
export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
};
