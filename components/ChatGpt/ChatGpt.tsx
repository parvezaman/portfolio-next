import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';
// import * as dotenv from 'dotenv';
// require('dotenv').config()
// dotenv.config();
// require('dotenv').config({ path:'/.env' });
type Props = {}

const ChatGpt = ({ }: Props) => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const myKey = process.env.REACT_APP_OPENAI_API_KEY

    const config = new Configuration({ apiKey: myKey });
    const openai = new OpenAIApi(config);


    // console.log(myKey);
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await openai.createCompletion({
                model: "text-davinci-002",
                prompt: prompt,
                temperature: .5,
                max_tokens: 100
            })
            // console.log(response);
            setResult(response.data.choices[0].text)
        }
        catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            {/* <div className='flex flex-col items-center justify-center'> */}
            <textarea
                // type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="So... What was wriggling in your precious head???"
                className='contactInput md:w-96 h-48'
            />
            <button
                onClick={handleSubmit}
                disabled={loading || prompt.length === 0}
                className="bg-[#aa5403] py-5 px-10 rounded-md text-gray-300 font-bold md:w-96"
            >
                {loading ? "Generating..." : "Generate"}
            </button>
            {/* </div> */}

            {/* <div className='w-full overflow-scroll'> */}
            <pre className='text-start'>
                {result}
            </pre>
            {/* </div> */}
        </div>
    )
}

export default ChatGpt