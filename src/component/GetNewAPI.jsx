import axios from "axios";

const URL = `https://newsapi.org/v2/everything?`;
const PAGESIZE = 10;
const LANGUAGE = "es";
const API_KEY = "0c4a982640634bac9fbf09682c9aba17";

export default async function GetDataAPI(search, page) {
  
  const response = await axios.get(
    URL,
    {
      params: {
        q: search,
        apiKey: API_KEY,
        page: page,
        pageSize: PAGESIZE,
        language: LANGUAGE,
      },
    }
  );

  return response;
}