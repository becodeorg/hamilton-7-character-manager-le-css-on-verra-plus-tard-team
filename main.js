import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { divConstructor } from "./public/js/constructorDOM" 
import { goFetchAllAsync } from "./public/js/apiRequests"
import axios from "axios"


let charList = await goFetchAllAsync();

for (const iterator of charList) {
  divConstructor(iterator);
}
