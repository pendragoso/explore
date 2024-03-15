import { env } from 'src/utils/environment';

export const getChatbotRequestParameters = () => ({
  headers: {
    CHATBOT_SERVICE_TOKEN: env.CHATBOT_SERVICE_TOKEN,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
  url: env.CHATBOT_URL,
});
