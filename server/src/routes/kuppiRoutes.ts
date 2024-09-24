import { Router } from "express";
import { addKuppi, deleteKuppi, getKuppi, updateKuppi } from "../controllers/kuppi/kuppiTimeController";
import { addPastPaper, deletePastPaper, getPastPapers, updatePastPaper } from "../controllers/kuppi/pastPaperController";
import { addKuppiNotes, deleteKuppiNotes, getKuppiNotes, updateKuppiNotes } from "../controllers/kuppi/kuppiNotesController";

const router = Router();

// timetable

router.post('/addtimetable',addKuppi)
router.get('/gettimetable',getKuppi)
router.patch('/timetable',updateKuppi)
router.delete('/timetable',deleteKuppi)

// pastPaper
router.post('/addpastpaper',getPastPapers)
router.get('/getpastpaper',addPastPaper)
router.patch('/pastpaper',updatePastPaper)
router.delete('/pastpaper',deletePastPaper)

//kuppi note

router.post('/addkuppinote',addKuppiNotes)
router.get('/getkuppinote',getKuppiNotes)
router.patch('/kuppinote',updateKuppiNotes)
router.delete('/kuppinote',deleteKuppiNotes)


export default router;