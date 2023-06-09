import { Copyleaks } from "plagiarism-checker";
import dotenv from "dotenv";

dotenv.config();

const email: string = 'alicia.tando@gmail.com';
const key: any = process.env.COPYLEAKS_API_KEY;

console.log(key)

const getSomethingElse = async () => {
    const copyleaks = new Copyleaks();
    console.log(await copyleaks.loginAsync(email, key));

    const token = await copyleaks.loginAsync(email, key);
    const url = ""
    const result = await fetch(url, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

getSomethingElse();