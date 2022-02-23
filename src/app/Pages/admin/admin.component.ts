import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService, UserResult } from 'src/app/modules/shared/test.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isTestChanges: boolean = true;
  resultList: UserResult[] = [];

  constructor(
    private service: TestService,
    private router: Router
  ) {
    this.resultList = this.service.resultList;
  }

  ngOnInit(): void {
    console.log('resList', this.resultList);
  }

  selectItem(item: string): void {
    if (item === 'test') this.isTestChanges = true;
      else if(item === 'result') this.isTestChanges = false;
  }

  backTest(): void {
    this.router.navigate(['/test']);
  }

}
