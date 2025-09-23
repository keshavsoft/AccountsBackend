import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnAccountName,LocalCoumnMobile}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnAccountName,LocalCoumnMobile});

    return LocalFromDal;
};

export {
    postDefaultFunc
};