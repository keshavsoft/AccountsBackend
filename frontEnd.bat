xcopy .\ReceiptsTable.json ..\GulpAsUi\schema.json /h /i /c /k /e /r /y

cd ../GulpAsUi

call npm run dist

xcopy .\dist ..\Accounts\Public\ReceiptsTable /h /i /c /k /e /r /y

