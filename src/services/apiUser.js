import axios from "axios";

export async function getUser({id}) {
    try {
        const {data} = await axios.get(`https://localhost:${id}`)
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getSession({id}) {
    try {
        const {data} = await axios.get(`https://localhost:${id}`)
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
// export async function get({id}) {
//     try {
//         const {data} = await axios.get(`https://localhost:${id}`)
//         return data;
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }