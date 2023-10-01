// React-icons 
import {FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Footer(){
    return(
        <footer className='flex items-center justify-between gap-4 text-xl'>
            <h3 >GuilhermeGSZ</h3>
            <div className='flex items-center gap-4'>
                <a href="https://github.com/ggualbertosouza" target='_blank'>
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/guilhermegsz" target='_blank'>
                <FaLinkedin />
                </a>
            </div>
        </footer>
    )
}