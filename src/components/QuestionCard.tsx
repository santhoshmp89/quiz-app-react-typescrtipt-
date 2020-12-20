import React from 'react';
import {ButtonVariant} from './Button';

export interface IProps {
    question: string
    answers: string[]
    callBack: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: any
    questionNr: number
    totalQuestions: number
}

export const QuestionCard: React.FC<IProps> = ({
    question,
    answers,
    callBack,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
    return(
        <div>
            <h3>Question {`${questionNr} / ${totalQuestions}`}</h3>
            <h4>{question}</h4>
            <ol>
                {
                    answers?.map(item => {
                        return <li key={item}><ButtonVariant 
                        userClicked={userAnswer?.correctAnswer === item}
                        correct={userAnswer?.answer === item} 
                        disabled={!!userAnswer} onClick={callBack} value={item}>{item}</ButtonVariant></li>
                    })
                }
            </ol>
        </div>
    )
}