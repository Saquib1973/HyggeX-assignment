import React, { useState } from 'react';
import QuestionCard from './component.quiz.card';
import { questionsData } from '../common/data';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="flex justify-center items-center my-8">
            <div className="flex justify-center items-center flex-col gap-6 w-full mx-auto">
                <QuestionCard question={questionsData[currentQuestionIndex].question} answer={questionsData[currentQuestionIndex].answer} />
                <div className="flex items-center justify-around gap-4 z-50 mt-[220px] mx-5 w-full md:w-1/2">
                    <svg className='w-7' viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z" fill="url(#paint0_linear_1_169)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_169" x1="15" y1="0.184647" x2="15" y2="30.2034" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#06286E" />
                                <stop offset="1" stop-color="#164EC0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg className='rotate-180 cursor-pointer w-10' viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handlePreviousQuestion}>
                        <path d="M30 0.194031C24.0666 0.194031 18.2664 1.9535 13.3329 5.24994C8.39943 8.54638 4.55426 13.2317 2.28363 18.7135C0.0129986 24.1953 -0.581101 30.2273 0.576455 36.0467C1.73401 41.8662 4.59123 47.2116 8.78681 51.4072C12.9824 55.6028 18.3279 58.46 24.1473 59.6176C29.9667 60.7751 35.9987 60.181 41.4805 57.9104C46.9623 55.6398 51.6476 51.7946 54.9441 46.8611C58.2405 41.9277 60 36.1275 60 30.194C59.9845 22.2423 56.8189 14.6206 51.1961 8.99789C45.5734 3.37515 37.9518 0.209481 30 0.194031ZM39.6339 31.8956L28.0954 42.2802C27.6675 42.6651 27.1139 42.8806 26.5385 42.8863C26.218 42.8876 25.9009 42.8214 25.6078 42.6921C25.3146 42.5627 25.052 42.3731 24.8369 42.1356C24.6322 41.912 24.4735 41.6502 24.3699 41.3652C24.2664 41.0803 24.22 40.7777 24.2334 40.4748C24.2468 40.1719 24.3198 39.8747 24.4482 39.6C24.5766 39.3253 24.7578 39.0786 24.9815 38.874L34.6154 30.194L24.9815 21.511C24.5541 21.0922 24.3061 20.5237 24.2897 19.9255C24.2734 19.3274 24.4901 18.7462 24.894 18.3047C25.298 17.8633 25.8576 17.596 26.4549 17.5592C27.0522 17.5225 27.6404 17.7192 28.0954 18.1079L39.6339 28.4925C39.8698 28.7087 40.0583 28.9716 40.1872 29.2645C40.3161 29.5574 40.3826 29.874 40.3826 30.194C40.3826 30.5141 40.3161 30.8306 40.1872 31.1235C40.0583 31.4165 39.8698 31.6794 39.6339 31.8956Z" fill="url(#paint0_linear_1_173)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_173" x1="30" y1="0.194031" x2="30" y2="60.194" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#06286E" />
                                <stop offset="1" stop-color="#164EC0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p className='text-xl md:text-3xl mt-1'>{currentQuestionIndex + 1}/{questionsData.length}</p>
                    <svg className=" w-10 cursor-pointer" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNextQuestion}>
                        <path d="M30 0.194031C24.0666 0.194031 18.2664 1.9535 13.3329 5.24994C8.39943 8.54638 4.55426 13.2317 2.28363 18.7135C0.0129986 24.1953 -0.581101 30.2273 0.576455 36.0467C1.73401 41.8662 4.59123 47.2116 8.78681 51.4072C12.9824 55.6028 18.3279 58.46 24.1473 59.6176C29.9667 60.7751 35.9987 60.181 41.4805 57.9104C46.9623 55.6398 51.6476 51.7946 54.9441 46.8611C58.2405 41.9277 60 36.1275 60 30.194C59.9845 22.2423 56.8189 14.6206 51.1961 8.99789C45.5734 3.37515 37.9518 0.209481 30 0.194031ZM39.6339 31.8956L28.0954 42.2802C27.6675 42.6651 27.1139 42.8806 26.5385 42.8863C26.218 42.8876 25.9009 42.8214 25.6078 42.6921C25.3146 42.5627 25.052 42.3731 24.8369 42.1356C24.6322 41.912 24.4735 41.6502 24.3699 41.3652C24.2664 41.0803 24.22 40.7777 24.2334 40.4748C24.2468 40.1719 24.3198 39.8747 24.4482 39.6C24.5766 39.3253 24.7578 39.0786 24.9815 38.874L34.6154 30.194L24.9815 21.511C24.5541 21.0922 24.3061 20.5237 24.2897 19.9255C24.2734 19.3274 24.4901 18.7462 24.894 18.3047C25.298 17.8633 25.8576 17.596 26.4549 17.5592C27.0522 17.5225 27.6404 17.7192 28.0954 18.1079L39.6339 28.4925C39.8698 28.7087 40.0583 28.9716 40.1872 29.2645C40.3161 29.5574 40.3826 29.874 40.3826 30.194C40.3826 30.5141 40.3161 30.8306 40.1872 31.1235C40.0583 31.4165 39.8698 31.6794 39.6339 31.8956Z" fill="url(#paint0_linear_1_173)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_173" x1="30" y1="0.194031" x2="30" y2="60.194" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#06286E" />
                                <stop offset="1" stop-color="#164EC0" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className='w-7' viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.28571 10.9083H0V0.194031H10.7143V4.47974H4.28571V10.9083ZM0 19.4797H4.28571V25.9083H10.7143V30.194H0V19.4797ZM25.7143 25.9083H19.2857V30.194H30V19.4797H25.7143V25.9083ZM19.2857 4.47974V0.194031H30V10.9083H25.7143V4.47974H19.2857Z" fill="url(#paint0_linear_1_174)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_174" x1="15" y1="0.194031" x2="15" y2="30.194" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#06286E" />
                                <stop offset="1" stop-color="#164EC0" />
                            </linearGradient>
                        </defs>
                    </svg>


                </div>
            </div>
        </div>
    );
};
export default Quiz;


