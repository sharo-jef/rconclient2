const util = require("../lib/util");

module.exports = {
    name: "datapack",           // command name
    usage: "helpを参照",          // usage
    description: "読み込まれるデータパックを操作する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
