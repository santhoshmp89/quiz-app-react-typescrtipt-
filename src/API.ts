import { shuffleArray } from './Utils';

export const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

export interface Question {
    categoty: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

export interface QuestionState extends Question {
    answers: string[]
}


export const fetchQuestions = async (): Promise<QuestionState[]> => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.results.map((ele: Question) => {
        return {
            ...ele,
            answers: shuffleArray([...ele.incorrect_answers, ele.correct_answer])
        }
    })
}