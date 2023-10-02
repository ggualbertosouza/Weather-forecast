// Components
import { motion } from "framer-motion";
import Weather from "../weather/Weather";

export default function Card() {
  return (
    <div className="flex flex-col items-center gap-12">
    <h1 className="text-white text-4xl ">Weather Forecast</h1>
    <motion.div 
          whileHover={{scale: 1.5}}

    className="rounded-xl border hover:shadow-lg hover:shadow-white bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 border border-sky-800"> 
      <div 
      className="flex flex-col items-center justify-center gap-12 p-4 text-white">
        <Weather />
      </div>
    </motion.div>
    </div>
  );
}
