import TelegramBot from "node-telegram-bot-api";
import * as process from "process";

const token = process.env.TOKEN_BOT!;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatid = msg.chat.id;
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
