import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: '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 ' , // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
 
});

export default openai ;