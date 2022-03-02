import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  options = { headers: this.httpHeaders };

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

  constructor(
    private http: HttpClient
  ) { }


  keyloackTest() {
    const baseApiUrl = 'http://192.168.154.100:8081/auth/realms/NewRealmTest/protocol/openid-connect/token';
    const body = new HttpParams()
    .set('client_id', 'login-app')
    .set('username', 'user1')
    .set('password', 'user1')
    .set('grant_type', 'password');

    return this.http.post(baseApiUrl, body.toString(), this.options);
  }


  keyCloacTestReq() {

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    
    var urlencoded = new URLSearchParams();
    urlencoded.append('client_id', 'login-app');
    urlencoded.append('username', 'user1');
    urlencoded.append('password', 'Idet2050!');
    urlencoded.append('grant_type', 'password');
    urlencoded.append('scope', 'openid');
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };
    
    fetch(
      'http://192.168.154.100:8081/auth/realms/NewRealmTest/protocol/openid-connect/token',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    
    

  }
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