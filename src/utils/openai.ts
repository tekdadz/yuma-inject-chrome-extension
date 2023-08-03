import { Configuration, OpenAIApi } from 'openai';

export const GPT_MODEL = 'text-davinci-003';
const OPENAI_API_KEY = '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';
const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export default openai;