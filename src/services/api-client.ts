import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1eb4feaffb3444a98b76249b1aff216e'
    }
})