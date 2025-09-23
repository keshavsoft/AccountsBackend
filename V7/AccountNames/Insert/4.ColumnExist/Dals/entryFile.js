import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnAccountName,LocalCoumnMobile}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnAccountName,LocalCoumnMobile});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};