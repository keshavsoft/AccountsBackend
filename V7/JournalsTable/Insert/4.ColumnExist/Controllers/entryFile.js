import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnDebit = LocalRequestBody.Debit;
	let LocalCoumnCredit = LocalRequestBody.Credit;
	let LocalCoumnDescription = LocalRequestBody.Description;
	let LocalCoumnDate = LocalRequestBody.Date;
	let LocalCoumnAccountName = LocalRequestBody.AccountName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnAccountName,LocalCoumnDate,LocalCoumnDescription,LocalCoumnCredit,LocalCoumnDebit});

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