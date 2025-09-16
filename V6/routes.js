import express from 'express';

const router = express.Router();

import { router as routerFromJournalsTable } from "./JournalsTable/routes.js";

router.use("/JournalsTable", routerFromJournalsTable);

export { router };