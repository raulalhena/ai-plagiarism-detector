import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { prompt } from "./data";

dotenv.config();

const configuration = new Configuration({
    organization: "org-zLi5dzMGqeXJJW4VOzpmOq1K",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getSomething = async () => {
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0,
    });
    const data = result.data;
    console.log(data.choices[0].text);
}

getSomething();


