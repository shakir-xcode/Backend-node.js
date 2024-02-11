import { config } from "dotenv";
import { BardAPI } from "bardapi";

config(); // initialise dotenv

const bard = new BardAPI({ sessionId: process.env.TOKEN });

const fun = async () => {
const res = await bard.ask({ message: "What's the news today?" });
console.log(res.response);

const res2 = await bard.ask({
  message: "Summarise the information into a small paragraph",
});
console.log(res2.response);

}

fun();