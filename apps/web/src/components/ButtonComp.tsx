import React from 'react'

const ButtonComp = ({ text }: { text: string }) => {
    return (
        <button className='bg-btn text-white font-semibold hover:bg-btnhover transition-all duration-150 hover:shadow-md px-5 py-2 rounded-md'>
            {text}
        </button>
    )
}

export default ButtonComp