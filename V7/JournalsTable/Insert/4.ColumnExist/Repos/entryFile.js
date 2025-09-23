import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnAccountName,LocalCoumnDate,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnAccountName,LocalCoumnDate,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit});

    return LocalFromDal;
};

export {
    postDefaultFunc
};