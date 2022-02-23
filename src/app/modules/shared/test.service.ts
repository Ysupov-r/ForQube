import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  animalTest: ITest[] = [
    {
      id: 1,
      question: 'Как называют маленького птенца чайки?',
      answerOpt: ['Клевыш','Кавыш','Купыш'],
      trueAnswer: 'Кавыш',
      answer: ''
    },
    {
      id: 2,
      question: 'Какая из этих птиц самая маленькая?',
      answerOpt: ['Воробей','Ласточка','Колибри'],
      trueAnswer: 'Колибри',
      answer: ''
    }
  ];

  resultList: UserResult[] = [];

  constructor() { }
}

export interface ITest {
  id: number;
  question: string;
  answerOpt: string[];
  trueAnswer: string;
  answer: string;
}

export interface UserResult {
  userName: string | null;
  result: IResult[];
}

export interface IResult {
  questionId: number,
  question: string,
  trueAnswer: string,
  answer: string,
  isCorrect: boolean,
}