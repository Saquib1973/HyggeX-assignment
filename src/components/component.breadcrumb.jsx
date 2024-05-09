import React from 'react'

const BreadCrumb = () => {
    return (
        <div className='flex items-center md:gap-1 gap-2 text-gray-600 text-lg md:text-xl'>
            <svg className='-mt-1 h-7 max-md:h-5' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">10
                <path d="M21.5738 9.71747L12.8238 2.06123C12.5958 1.86151 12.3031 1.7514 12 1.7514C11.6969 1.7514 11.4042 1.86151 11.1763 2.06123L2.42625 9.71747C2.29221 9.83491 2.18483 9.97966 2.11132 10.142C2.0378 10.3043 1.99985 10.4805 2 10.6587V21.7487C2 22.0802 2.1317 22.3982 2.36612 22.6326C2.60054 22.867 2.91848 22.9987 3.25 22.9987H8.25C8.58152 22.9987 8.89946 22.867 9.13388 22.6326C9.3683 22.3982 9.5 22.0802 9.5 21.7487V16.7487C9.5 16.4172 9.6317 16.0993 9.86612 15.8648C10.1005 15.6304 10.4185 15.4987 10.75 15.4987H13.25C13.5815 15.4987 13.8995 15.6304 14.1339 15.8648C14.3683 16.0993 14.5 16.4172 14.5 16.7487V21.7487C14.5 22.0802 14.6317 22.3982 14.8661 22.6326C15.1005 22.867 15.4185 22.9987 15.75 22.9987H20.75C21.0815 22.9987 21.3995 22.867 21.6339 22.6326C21.8683 22.3982 22 22.0802 22 21.7487V10.6587C22.0002 10.4805 21.9622 10.3043 21.8887 10.142C21.8152 9.97966 21.7078 9.83491 21.5738 9.71747Z" stroke="#696671" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Arrow />
            Flashcard
            <Arrow />
            Mathematics
            <Arrow />
            <span className='text-blue-800 text-lg md:text-xl font-medium line-clamp-1'>
                Relation and Functions
            </span>
        </div>
    )
}

export default BreadCrumb
export const Arrow = () => {

    return (
        <span className='font-light md:font-medium'>
            {`>`}
        </span>
    )
}