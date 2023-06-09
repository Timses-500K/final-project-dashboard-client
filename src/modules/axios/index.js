const { default: axios } = require("axios");

const baseURL = "http://localhost:3001";
const instance = axios.create({
	baseURL: "http://localhost:3001/api",
	headers: {
		"Content-type": "application/json",
	},
});

export { instance };
