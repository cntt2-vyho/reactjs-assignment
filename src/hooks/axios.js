import axios from "axios";
import { base } from "./constants";

const queryString = require('query-string');

const request = axios.create({
    baseURL: `${base}`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

export default request;