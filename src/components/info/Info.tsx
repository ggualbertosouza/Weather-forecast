// Icons
import { ReactNode } from 'react'

type InfoProps = {
    icon?: ReactNode,
    item?: string,
    name?: string,
}

export default function Info({name, icon, item}:InfoProps){
    return(
        <div className='flex items-center gap-2 divide-x'>
            <div className='text-3xl'>
            {icon}
            </div>
            <div className='flex flex-col pl-2'>
                <p className='font-bold'>{item}</p>
                <small className='opacity-70'>{name}</small>
            </div>
        </div>
    )
}