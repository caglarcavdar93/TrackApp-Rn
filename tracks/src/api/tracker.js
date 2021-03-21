import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
    baseURL:"http://97548b153537.ngrok.io"
});

instance .interceptors.request.use(
    async (conf) => {
        const token= await AsyncStorage.getItem("token");
        if(token){
            conf.headers.Authorization = `Bearer ${token}`;
        }
        return conf;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance