"use strict";
const TelegramBot = require("node-telegram-bot-api");
const token = "7353533228:AAFhHCX8XJxBzcq96jaRRiiOE3Cg-7mQOkk";
const bot = new TelegramBot(token, { polling: true });
bot.on("message", (msg) => {
    const text = msg.text;
    const chatid = msg.from.id;
    if (text == "/start") {
        bot.sendMessage(chatid, "test", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "mini-apps", web_app: { url: "https://google.com" } }],
                ],
            },
        });
    }
});
//# sourceMappingURL=index.js.map