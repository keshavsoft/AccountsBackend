import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    const $table = $('#table');

    const finalOptions = {
        onClickRow: StartFuncOnClickRowFunc
    };

    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
