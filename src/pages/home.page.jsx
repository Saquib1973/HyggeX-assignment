import React, { useState } from 'react'
import BreadCrumb from '../components/component.breadcrumb'
import { types } from '../common/data'
import Quiz from '../components/component.quiz'
import logo from "../imgs/Group 1.png"
import { AnimatePresence, motion } from "framer-motion"
const Home = () => {
    // Data ***Ignore***
    const faqData = [
        {
            question: "Can education flashcards be used for all age groups?",
            answer: "Yes, education flashcards can be used for all age groups. They are versatile learning tools that can be adapted to suit the learning needs of different age groups, from young children to adults."
        },
        {
            question: "How do education flashcards work?",
            answer: "Education flashcards work by presenting information in a concise and visual format, making it easier for learners to understand and retain key concepts. They can be used for various subjects and topics, including vocabulary, math, science, and more."
        },
        {
            question: "Can education flashcards be used for test preparation?",
            answer: "Yes, education flashcards can be highly effective for test preparation. They allow learners to review key concepts, reinforce their understanding, and practice recalling information, which can improve retention and performance on tests and exams."
        }
    ];
    // IGNORE *****


    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleExpansion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {/* BreadCrumb to navigate not implemented logic its just the ui */}
            <BreadCrumb />
            {/* Heading */}
            <p className='gradientText text-xl md:text-3xl font-medium md:font-semibold tracking-wide mt-10'>Relations and Functions ( Mathematics )</p>
            {/* Question section */}
            <div className='w-full mx-auto mt-10'>
                {/* Switch */}
                <div className='flex justify-center items-center gap-6'>
                    {
                        types.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center relative gap-2 mt-4'>
                                    <p className={`text-xl md:text-2xl ${item.name === "Study" ? "gradientText" : ""}`}>{item.name}</p>
                                    <div className={`h-0.5 mt-1 w-full bottom-0 absolute bg-blue-800 ${item.name === "Study" ? "" : "hidden"}`} />
                                </div>
                            )
                        })
                    }
                </div>
                {/* Quiz Section */}
                <Quiz />
                <div className='flex justify-between gap-2 md:gap-4 items-center'>
                    <div className='flex items-center'>
                        <img src={logo} alt="" className='max-md:w-16 w-32 object-contain' />
                        <div>
                            <p className='max-md:text-sm text-gray-400'>Published by</p>
                            <svg className='w-16 md:w-16' viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.01153 3.78583H0.953796V25.7483H4.01153V15.3718H17.1354V25.7483H20.1931V3.78583H17.1354V12.4985H4.01153V3.78583Z" fill="#06286E" />
                                <path d="M20.7561 9.47291L28.0004 25.748C27.347 28.0475 26.4863 28.8034 24.4073 28.8034C23.9917 28.8034 23.4572 28.7433 22.7153 28.6222V31.4053C23.6055 31.4955 24.2589 31.5264 24.704 31.5264C28.6529 31.5264 29.3063 30.0438 31.236 25.6269L38.3025 9.47291H34.948L29.6334 23.1771L24.1999 9.47291H20.7561Z" fill="#06286E" />
                                <path d="M52.2265 9.47324V12.1352C50.9502 10.139 48.8122 8.95869 46.0208 8.95869C41.0038 8.95869 37.5001 12.5587 37.5001 17.6413C37.5001 22.693 40.9734 26.2019 46.0512 26.2019C48.6039 26.2019 50.564 25.2648 52.2265 23.3587V23.9033C52.2265 27.4423 50.5935 28.8639 46.2291 28.8639C43.587 28.8639 42.1023 28.0479 41.8056 26.293H38.5691C38.8953 29.6808 41.5383 31.5869 46.1996 31.5869C52.4339 31.5869 55.1064 29.1362 55.1064 23.661V9.47324H52.2265ZM46.4668 11.6817C50.1484 11.6817 52.4339 13.9202 52.4339 17.6413C52.4339 21.3014 50.1484 23.4798 46.4668 23.4798C42.7852 23.4798 40.5283 21.3315 40.5283 17.6413C40.5283 13.9202 42.7852 11.6817 46.4668 11.6817Z" fill="#06286E" />
                                <path d="M71.227 9.47324V12.1352C69.9506 10.139 67.8126 8.95869 65.0213 8.95869C60.0043 8.95869 56.5005 12.5587 56.5005 17.6413C56.5005 22.693 59.9739 26.2019 65.0517 26.2019C67.6044 26.2019 69.5645 25.2648 71.227 23.3587V23.9033C71.227 27.4423 69.594 28.8639 65.2295 28.8639C62.5874 28.8639 61.1028 28.0479 60.806 26.293H57.5695C57.8958 29.6808 60.5388 31.5869 65.2 31.5869C71.4344 31.5869 74.1069 29.1362 74.1069 23.661V9.47324H71.227ZM65.4673 11.6817C69.1489 11.6817 71.4344 13.9202 71.4344 17.6413C71.4344 21.3014 69.1489 23.4798 65.4673 23.4798C61.7857 23.4798 59.5288 21.3315 59.5288 17.6413C59.5288 13.9202 61.7857 11.6817 65.4673 11.6817Z" fill="#06286E" />
                                <path d="M92.9592 18.216V17.6413C92.9592 12.2263 89.7227 8.95869 84.2597 8.95869C78.9156 8.95869 75.5013 12.3775 75.5013 17.6413C75.5013 22.8742 78.8861 26.2019 84.2597 26.2019C88.5053 26.2019 91.5639 24.2056 92.6919 20.6967H89.3366C88.6841 22.4817 86.7838 23.4798 84.2597 23.4798C80.8454 23.4798 78.559 21.3925 78.559 18.216H92.9592ZM78.6189 16.1286C79.0935 13.3455 81.202 11.6817 84.2597 11.6817C87.3478 11.6817 89.4259 13.3756 89.8711 16.1286H78.6189Z" fill="#06286E" />
                                <path d="M92.3372 3.78583L100.799 14.6159L91.9216 25.7483H98.6904L104.035 18.6995L109.052 25.7483H116L107.212 14.5558L115.703 3.78583H109.052L104.094 10.6525L99.1364 3.78583H92.3372Z" fill="#06286E" />
                            </svg>
                        </div>

                    </div>
                    <div className='flex items-center gap-2 m-5'>
                        <svg className='h-6 md:h-10' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0001 -0.00019455C11.2001 -0.00019455 9.15527e-05 11.1998 9.15527e-05 24.9998C9.15527e-05 38.7998 11.2001 49.9998 25.0001 49.9998C38.8001 49.9998 50.0001 38.7998 50.0001 24.9998C50.0001 11.1998 38.8001 -0.00019455 25.0001 -0.00019455ZM37.5001 27.4998H27.5001V37.4998H22.5001V27.4998H12.5001V22.4998H22.5001V12.4998H27.5001V22.4998H37.5001V27.4998Z" fill="url(#paint0_linear_1_203)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_203" x1="25.0001" y1="-0.00019455" x2="25.0001" y2="49.9998" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#06286E" />
                                    <stop offset="1" stop-color="#164EC0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className='gradientText max-md:text-base text-2xl'>
                            Create Flashcard
                        </p>

                    </div>

                </div>
            </div>

            {/* FAQ section */}
            <div className="mt-16">
                <p className="max-md:text-lg gradientText text-2xl font-semibold mb-4">FAQ</p>
                <AnimatePresence>
                    <div className='flex gap-2 flex-col w-full md:max-w-[60%]'>
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                layout
                                className="mb-4 border border-blue-700 p-2 md:p-4 rounded-xl"
                                initial={{ opacity: 0, height: "auto" }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div
                                    className="cursor-pointer p-2 md:p-4 py-1 rounded-lg text-md md:text-xl flex justify-between"
                                    onClick={() => toggleExpansion(index)}
                                >
                                    {faq.question}
                                    <svg width="24" className={`${expandedIndex === index ? "-rotate-180 transition-all duration-500" : ""}`} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.855 7.49599C4.91074 7.44006 4.97698 7.39567 5.04991 7.36539C5.12284 7.33511 5.20103 7.31952 5.28 7.31952C5.35897 7.31952 5.43716 7.33511 5.51009 7.36539C5.58302 7.39567 5.64926 7.44006 5.705 7.49599L12.48 14.272L19.255 7.49599C19.3677 7.38328 19.5206 7.31995 19.68 7.31995C19.8394 7.31995 19.9923 7.38328 20.105 7.49599C20.2177 7.60871 20.281 7.76159 20.281 7.92099C20.281 8.0804 20.2177 8.23328 20.105 8.34599L12.905 15.546C12.8493 15.6019 12.783 15.6463 12.7101 15.6766C12.6372 15.7069 12.559 15.7225 12.48 15.7225C12.401 15.7225 12.3228 15.7069 12.2499 15.6766C12.177 15.6463 12.1107 15.6019 12.055 15.546L4.855 8.34599C4.79907 8.29025 4.75468 8.22401 4.7244 8.15108C4.69412 8.07815 4.67853 7.99996 4.67853 7.92099C4.67853 7.84202 4.69412 7.76383 4.7244 7.6909C4.75468 7.61797 4.79907 7.55173 4.855 7.49599Z" fill="#28262C" />
                                    </svg>

                                </div>
                                {expandedIndex === index && (
                                    <motion.div
                                        layout
                                        className="p-4 py-1 rounded-b-lg text-md md:text-xl"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>

            </div>


        </div>
    )
}

export default Home