import axios from "axios";


const AxiosPublic = axios.create({
  // baseURL:"https://hire-master-server.vercel.app"
    baseURL:'http://localhost:5000'
})


const UseAxiosPublic = () => {
  return AxiosPublic;
};

export default UseAxiosPublic;


