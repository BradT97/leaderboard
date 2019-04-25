import axios, { AxiosResponse, AxiosError } from 'axios';

require('dotenv').config();

const instance = axios.create({
    baseURL: `http://localhost:${process.env.port || 8080}`,
    timeout: 1000
});

instance.post('/createEvent', {
    event: {
        type: "score-update",
        score: 21
    }
})
    .then((response: AxiosResponse) => {
        console.log(response.data);
    })
    .catch((err: AxiosError) => {
        console.log(err.toString());
    })