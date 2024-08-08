import TelegramBot from "node-telegram-bot-api";
import * as process from "process";

const token = "7353533228:AAFhHCX8XJxBzcq96jaRRiiOE3Cg-7mQOkk"; // ПОФИКСИТЬprocess.env.TELEGRAM_BOT_TOKEN!;

const bot = new TelegramBot(token, { polling: true });

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
