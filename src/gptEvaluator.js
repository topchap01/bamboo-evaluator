import axios from 'axios';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const evaluateCampaign = async (data) => {
  const prompt = `You are Bamboo GPT — a senior global campaign strategist...`;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a promotional strategist.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    }
  );

  return response.data.choices[0].message.content;
};
