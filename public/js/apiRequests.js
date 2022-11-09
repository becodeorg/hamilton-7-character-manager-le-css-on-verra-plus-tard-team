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

export async function sendLetterAsync(letter) {
    let response = await axios.post("https://character-database.becode.xyz/characters", letter);
    return response.data;
}

export async function delCharAsync(id){
    console.log(id);
    let url = `https://character-database.becode.xyz/characters/${id}`;
    console.log(url);
    await axios.delete(url);
}

export async function modCharAsync(id, mods){
    const res = await axios({
        method: 'put',
        url: `https://character-database.becode.xyz/characters/${id}`,
        data: mods
    });
    return res.data;
}