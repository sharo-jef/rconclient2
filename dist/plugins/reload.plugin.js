const util = require("../lib/util");

module.exports = {
    name: "reload",           // command name
    usage: "helpを参照",          // usage
    description: "ルートテーブル、進捗、関数を記憶装置から再読み込みする",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
