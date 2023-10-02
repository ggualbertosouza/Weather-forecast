// React icons
import { BsSearch } from "react-icons/bs";

// Framer Motion
import {motion} from 'framer-motion'
// Animation

// Redux
import {useDispatch} from 'react-redux'
import { setCity } from "../../features/city-slice";
export default function SearchBar(){

    const dispatch = useDispatch()
    
    function sendLocal(city: string) {
        dispatch(setCity(city))
    }
    
    let local: string = ''
    return(
        <div     
        className="flex items-center gap-2">
            <input 
            onChange={(e) => local = e.target.value}
            type="text" 
            placeholder="Procure por uma cidade"
            id='city'
            className="rounded-xl p-1 outline-none text-zinc-900/60 focus:shadow-sm focus:shadow-black" />
            <motion.button
            whileHover={{x: 1, y: -1}}
            onClick={() => sendLocal(local)}
            id='btn'
            className="p-2 bg-white rounded-full text-zinc-900 hover:shadow-md hover:shadow-black">
                <BsSearch />
            </motion.button>
        </div>
    )
}