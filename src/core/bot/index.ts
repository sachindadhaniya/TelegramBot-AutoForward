import { Bot, Context, session } from "grammy";
import { type Conversation, type ConversationFlavor, conversations } from "@grammyjs/conversations";

type MyContext = Context & ConversationFlavor;
type MyConversation = Conversation<MyContext>;

const bot = new Bot(String(process.env.BOT_TOKEN));

// bot.use(session({ initial: () => ({}) }));
// bot.use(conversations());

bot.init()
    .then((client) => {
        console.log(`Successfully logged in as ${bot.botInfo.username} - ${bot.botInfo.id}`);
    })
    .catch((err) => console.error(err));

bot.api.setMyCommands([
    { command: "start", description: "Start this bot" },
    { command: "connect", description: "setup account" },
    { command: "forward", description: "setup auto forward" },
    { command: "getuser", description: "Get User ID" },
    { command: "getgroup", description: "Get Group ID" },
    { command: "getchanel", description: "Get Channel ID" },
]);

bot.catch((ctx) => {
    console.error("Error Bot");
    console.log(ctx);
    
})

export { bot, MyContext, MyConversation };
