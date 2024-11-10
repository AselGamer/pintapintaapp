import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const setToken = (token) => {
	AsyncStorage.setItem('token', token).then(() => {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	});
}

const removeToken = () => {
	AsyncStorage.removeItem('token').then(() => {
		axios.defaults.headers.common.Authorization = null;
	});
}

module.exports = {
	setToken: setToken,
	removeToken: removeToken
}
