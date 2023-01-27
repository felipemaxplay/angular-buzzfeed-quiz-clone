import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/data.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  finish: boolean = false;
  title: string = "";
  options: any;
  optionSelected: any;
  answers: Array<string> = [];
  answerSelected: string = '';
  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  ngOnInit(): void {
    if(quizz_questions) {
      this.finish = false;
      this.title = quizz_questions.title;
      this.options = quizz_questions.questions;
      this.optionSelected = this.options[this.questionIndex];

      this.questionMaxIndex = 0;
      this.questionMaxIndex = this.options.length;
    }
  }

  playerChoice(value: string): void {
    this.answers.push(value);
    console.log(this.answers);
  }

  nextStep(): void {
    this.questionIndex += 1;
    if(this.questionMaxIndex > this.questionIndex) {
      this.optionSelected = this.options[this.questionIndex];
    } else {
      this.finish = true;
    }
  }
}
