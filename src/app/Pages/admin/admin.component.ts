import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestService, UserResult } from 'src/app/modules/shared/test.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isTestChanges: boolean = true;
  resultList: UserResult[] = [];

  form = new FormGroup({
    Question: new FormControl(null, Validators.required),
    TrueAnswer: new FormControl(null, Validators.required),
    AnswerOpt: new FormControl(null, Validators.required),
  });

  constructor(
    private service: TestService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.resultList = this.service.resultList;
  }

  ngOnInit(): void {
    console.log('resList', this.resultList);
  }

  onSubmit(): void {
    const obj = {
      id: this.service.animalTest.length + 1,
      question: this.form.value.Question,
      answerOpt: this.form.value.AnswerOpt.trim().split(' '),
      trueAnswer: this.form.value.TrueAnswer,
      answer: ''
    }
    this.service.animalTest.push(obj);
    this.toast.success('Вопрос был добавлен');
  }

  selectItem(item: string): void {
    if (item === 'test') this.isTestChanges = true;
      else if(item === 'result') this.isTestChanges = false;
  }

  backTest(): void {
    this.router.navigate(['/test']);
  }

}
