import { BadgeCheck } from 'lucide-react';

export default function Title(props){
    return (
        <div className='w-[85%] space-x-2 flex justify-center items-center mx-auto mb-6'>
            <div className='w-[35%] h-px bg-gradient-to-r from-transparent to-black/70'></div>
            <p className='w-[280px] flex justify-center items-center space-x-2'><span><BadgeCheck /></span><span className='font-medium '>{props.title}</span></p>
            <div className='w-[35%] h-px bg-gradient-to-l from-transparent to-black/70'></div>
        </div>
    )
}