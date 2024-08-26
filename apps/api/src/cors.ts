import { CORS_ORIGIN } from "./constants";

export const corsOptions = {
  origin: process.env.CORS_ORIGIN ?? CORS_ORIGIN ?? "*",
  optionsSuccessStatus: 200,
};
