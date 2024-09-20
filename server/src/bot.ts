import TelegramBot from "node-telegram-bot-api";

const token = "2200037495:AAE_MOMQd7MzgRn8QCLVo7T2lo5Jfla43zc";

const bot = new TelegramBot(token, { polling: true, testEnvironment: true });

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
