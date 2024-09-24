import e, { Request, Response } from "express";
import { Timetable } from "../../models/kuppiModel";

export const addKuppi = async (req: Request, res: Response): Promise<void> => {
    try {
        const { subject, startTime, endTime, date } = req.body;
        const newKuppi = new Timetable({
            subject,
            startTime, 
            endTime, 
            date });

        const savedKuppi = await newKuppi.save();

        res.status(201).json(savedKuppi);

    } catch (error : any) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getKuppi = async (req: Request, res: Response): Promise<void> => {
    try {
        const timetable = await Timetable.find();
        res.status(200).json(timetable);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const deleteKuppi = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await Timetable.findByIdAndDelete(id);
        res.status(200).json({ message: 'Kuppi deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateKuppi = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { subject, startTime, endTime, date } = req.body;
        const updatedKuppi = await Timetable.findByIdAndUpdate(
            id,
            { subject, startTime, endTime, date },
            { new: true }
        );
        res.status(200).json(updatedKuppi);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
