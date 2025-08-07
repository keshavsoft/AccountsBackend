import express from 'express';

const router = express.Router();

import { router as routerFromMastersAddOns } from "./MastersAddOns/routes.js";

router.use("/MastersAddOns", routerFromMastersAddOns);

export { router };