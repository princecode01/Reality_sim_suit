import axios from "axios";

export async function getStats(){
    const endPoints=[
        "https://localhost:7232/api/Scene/all",
        "https://localhost:7232/api/User/all",
        "https://localhost:7232/api/Session/all",
        "https://localhost:7232/api/SuitJoint/all"
    ]

    try {
        // Create an array of Axios GET requests based on the provided URLs
        const requests = endPoints?.map(url => axios.get(url));

        // Use axios.all to execute all the requests simultaneously
        const responses = await axios.all(requests);
        
        // Extract the data from each response
        const data = responses.map(response => response.data);

        return {scenes: data[0],users:data[1],sessions:data[2],joints:data[3]};
    } catch (error) {
        console.error("Error fetching URLs:", error);
        throw error;
    }
}


