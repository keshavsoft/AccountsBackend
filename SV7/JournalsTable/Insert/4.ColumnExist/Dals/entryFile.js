import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnAccountName,LocalCoumnDate,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnAccountName,LocalCoumnDate,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};