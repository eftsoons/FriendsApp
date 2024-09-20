"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const token = "2200037495:AAE_MOMQd7MzgRn8QCLVo7T2lo5Jfla43zc";
const bot = new node_telegram_bot_api_1.default(token, { polling: true, testEnvironment: true });
bot.on("message", (msg) => {
    const text = msg.text;
    const chatid = msg.chat.id;
    if (text == "/start") {
        bot.sendMessage(chatid, "test", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "mini-apps",
                            web_app: { url: "https://eftsoons.github.io/FriendsApp/" },
                        },
                    ],
                ],
            },
        });
    }
});
//# sourceMappingURL=bot.js.map