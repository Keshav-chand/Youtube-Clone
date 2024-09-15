import axios from "axios";

const BASE_URL='https://youtube138.p.rapidapi.com';
const API_KEY='fdae7d6bbdmsh1853716e25c8f67p1c3488jsn7c037f3dc8a3';

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi=async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options);
    return data.contents;
  }