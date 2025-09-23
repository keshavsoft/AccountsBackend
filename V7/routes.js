import express from 'express';

const router = express.Router();

import { router as routerFromAccountNames } from "./AccountNames/routes.js";
import { router as routerFromJournalsTable } from "./JournalsTable/routes.js";

router.use("/AccountNames", routerFromAccountNames);
router.use("/JournalsTable", routerFromJournalsTable);

export { router };