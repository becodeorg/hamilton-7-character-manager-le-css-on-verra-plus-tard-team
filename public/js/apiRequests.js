import axios from "axios"

export async function goFetchAllAsync() {
    let url = "https://character-database.becode.xyz/characters";
    let response = await axios.get(url);
    return response.data;
}
 
export async function goFetchOneAsync(id) {
    let url = "https://character-database.becode.xyz/characters/"+id;
    let response = await axios.get(url);
    return response.data;
}