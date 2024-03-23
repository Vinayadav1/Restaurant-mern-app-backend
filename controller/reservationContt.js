import { reservation } from "../models/reservationSchema.js";
import ErrorHandler, { errorMiddleware } from "../error/error.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    return next(new ErrorHandler("Please provide all details", 400));
  }
  try {
    await reservation.create({ firstName, lastName, email, phone });
    res.status(200).json({
      success: true,
      message: "reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }

    return next(error);
  }
};
