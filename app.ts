import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
    organization: "org-zLi5dzMGqeXJJW4VOzpmOq1K",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const prompt = "Traduce hola al inglés"

const getSomething = async () => {
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "La frase Dios no juega los dados.",
        temperature: 0,
    });
    const data = result.data;
    console.log(data)
}

getSomething();


