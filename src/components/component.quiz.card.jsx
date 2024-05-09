import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className=" w-full md:w-[50%] relative cursor-pointer">
            <motion.div
                className="absolute w-full backface-hidden h-full px-4 md:px-10 py-32 bg-gradient-to-bl text-white from-[#051A91] via-[#061C93] to-[#1F80EB] flex justify-center items-center rounded-3xl shadow-md front"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onClick={toggleFlip}
            >
                <p className="text-lg md:text-2xl font-medium">{question}</p>
            </motion.div>
            <motion.div
                className="absolute backface-hidden w-full h-full px-4 md:px-10 py-32 bg-gradient-to-bl text-white from-[#051A91] via-[#061C93] to-[#1F80EB] flex justify-center items-center rounded-3xl shadow-md back"
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                onClick={toggleFlip}
            >
                <p className="text-lg md:text-2xl font-medium">{answer}</p>
            </motion.div>
        </div>
    );
};

export default QuestionCard;
