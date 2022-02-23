import { TestService, ITest, UserResult } from './../../modules/shared/test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  animalTest: ITest[] = [];
  userName = localStorage.getItem('QubeUserName');
  resultList: UserResult[] = [];

  isResult: boolean = false;

  constructor(
    private service: TestService,
    private router: Router
  ) {
    this.animalTest = this.service.animalTest;
  }

  ngOnInit(): void {

  }

  completeTest(): void {
    if (!this.isResult) {
      const obj = {
        userName: this.userName,
        result: this.animalTest.map(q => {
          return {
            questionId: q.id,
            trueAnswer: q.trueAnswer,
            question: q.question,
            answer: q.answer,
            isCorrect: q.answer === q.trueAnswer ? true : false
          }
        })
      }
      this.service.resultList.push(obj);
      this.resultList = this.service.resultList.filter(f => f.userName === this.userName);
      this.isResult = true;
    } else {
      this.isResult = false;
    }
  }

}
