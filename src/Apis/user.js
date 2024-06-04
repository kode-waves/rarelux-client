import axios from "axios";

export const createUser = async(address) => {
 await axios.post('http://localhost:4043/login', {
    address: address
})

}