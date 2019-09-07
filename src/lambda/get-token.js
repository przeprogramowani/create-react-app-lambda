// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios";

export async function handler(event, context) {
  const API_KEY = "1077954a4357fbe4596be97812aac0f8";
  const login = "wilsonowy@gmail.com";
  const password = "blabla";

  try {
    const response = await axios.post("https://favqs.com/api/session", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Token token="' + API_KEY + '"',
      },
      data: {
        user: {
          login: login,
          password: password,
        },
      },
    });
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
