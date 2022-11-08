import './../../style.css'
import { divConstructor } from "./constructorDOM" 
import { goFetchAllAsync, goFetchOneAsync } from "./apiRequests"
import axios from "axios"

const urlParams = new URLSearchParams(window.location.search);
const idValue = urlParams.get('id');
console.log(idValue);

let character = await goFetchOneAsync(idValue);
divConstructor(character);
