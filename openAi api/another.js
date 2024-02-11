const OpenAI = require('openai');

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const apiKey = "b865073daemshf674c74c7a23a93a1cp19e6f1jsnf23ac36a8ac7"

const openai = new OpenAI({
  apiKey: apiKey
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4',
  });

  console.log(chatCompletion)
}

main();

/*

const axios = require('axios');

const url = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';

const payload = {
	"messages": [
		{
			"role": "user",
			"content": "hello, this is a test"
		}
	],
	"system_prompt": "",
	"temprature": 0.9,
	"top_k": 5,
	"top_p": 0.9,
	"max_tokens":256,
	"web_access": false
}

const headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "b865073daemshf674c74c7a23a93a1cp19e6f1jsnf23ac36a8ac7",
	"X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",	
}


axios.post(url, payload, { headers })
  .then(response => {
    // Handle the response data
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // other than 2xx (e.g., 404, 500).
      console.error('Server responded with error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received.
      console.error('No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an Error.
      console.error('Error:', error.message);
    }
  });


*/























