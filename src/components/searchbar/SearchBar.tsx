// React icons
import { BsSearch } from "react-icons/bs";

// Framer Motion
import {motion, useCycle} from 'framer-motion'
// Animation
import {animate, buttonMotion} from '../animations/searchbar'


export default function SearchBar(){

    return(
        <div className="flex items-center gap-2">
            <input 
            type="text" 
            placeholder="Procure por uma cidade"
            id='city'
            className="rounded-xl p-1 outline-none text-zinc-900/60 focus:shadow-sm focus:shadow-black" />
            <button
            id='btn'
            className="p-2 bg-white rounded-full text-zinc-900 hover:shadow-md hover:shadow-black">
                <BsSearch />
            </button>
        </div>
    )
}