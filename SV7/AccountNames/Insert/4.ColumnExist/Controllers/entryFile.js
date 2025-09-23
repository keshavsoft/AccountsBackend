import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnMobile = LocalRequestBody.Mobile;
	let LocalCoumnAccountName = LocalRequestBody.AccountName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnAccountName,LocalCoumnMobile});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};