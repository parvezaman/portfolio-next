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

    const config = new Configuration({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY });
    const openai = new OpenAIApi(config);

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
            // setResult(response.data.choices[0].text)
            if (response && response.data && response.data.choices && response.data.choices.length > 0) {
                setResult(response.data.choices[0].text || "");
            } else {
                console.log('Invalid response:', response);
            }
        }
        catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            {/* <div className='flex flex-col items-center justify-center'> */}
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Hello to ChatGPT</h3>
            <textarea
                // type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="So... What was wriggling in your precious head???"
                className='contactInput w-96 h-48'
            />
            <button
                onClick={handleSubmit}
                disabled={loading || prompt.length === 0}
                className="bg-[#aa5403] py-5 px-10 rounded-md text-gray-300 font-bold w-96"
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