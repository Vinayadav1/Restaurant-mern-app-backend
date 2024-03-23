import express from "express";
const router = express.Router();
import { sendReservation } from "../controller/reservationContt.js";

router.post("/send", sendReservation);

export default router;
