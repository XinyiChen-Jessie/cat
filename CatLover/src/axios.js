import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-challenge-9e9bc.cloudfunctions.net/api'
  // 'http://localhost:5001/challenge-9e9bc/us-central1/api'
  // 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;


