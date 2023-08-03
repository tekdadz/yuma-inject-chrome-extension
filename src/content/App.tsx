import React from 'react';
import * as cheerio from 'cheerio';
import Button from '@/components/button';
import openai, { GPT_MODEL } from '@/utils/openai';

const generateResponse = async (prompt: string) => {
  const response = await openai.createCompletion({
    model: GPT_MODEL,
    prompt: prompt,
    max_tokens: 50,
    temperature: 0.7
  });

  return response.data.choices[0].text?.trim();
};

const generateSampleDraft = async () => {
  const $ = cheerio.load(document.getElementsByClassName('ticket-message')[0].childNodes[1].childNodes[1].textContent);
  
  const prompt = `Reply this message '${$.text().trim()}'`;
  
  const response = await generateResponse(prompt);
  console.log(response);
};


// const summarizeConversation = async () => {
//   const origin = '';
//   const prompt = `Summarize the conversation ${origin}`;
//   const response = await generateResponse(prompt);
//   console.log(response);
// };

export default function App() {
  return (
    <div className='dropdown'>
      <Button handler={generateSampleDraft } label='Generate'/>  
      {/* <button onClick={generateSampleDraft }> Replace </button>   */}
      {/* <button onClick={summarizeConversation }> Summarize </button>   */}
    </div>
  );
}
