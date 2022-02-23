import { TestService, ITest, UserResult } from './../../modules/shared/test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toast: ToastrService
  ) {
    this.animalTest = this.service.animalTest;
  }

  ngOnInit(): void {

  }

  completeTest(): void {
    if (!this.isResult) {
      const findUser = this.service.resultList.findIndex(el => el.userName === this.userName);
      console.log(findUser)
      if (findUser >= 0) {
        this.toast.error('Вы уже прошли тест');
        return;
      }
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

  openAdmin(): void {
    this.router.navigate(['/admin']);
  }

}
