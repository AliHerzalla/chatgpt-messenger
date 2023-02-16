import openai from "./chatgpt";

const query = async (inputValue: string, model: string, chatId: string) => {

    const result = await openai.createCompletion({
        model: model,
        prompt: inputValue,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
        .then((res) => res.data.choices[0].text)
        .catch((err) => `ChatGPT was unable to find an answer for that! (Error: ${err.message})`);

    return result;
}

export default query;