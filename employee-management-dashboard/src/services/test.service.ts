import apiClient from "../api/axios";

export async function testConnection(){
    const response = await apiClient.get('/user/1');

    console.log(response)
}