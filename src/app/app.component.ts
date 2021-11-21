import { Component } from '@angular/core';
import { Comment } from './models/comment.model';

const mockComments: Comment[] = [
  { name: '大島 渚', message: '皆様お変わりなくお過ごしでしょうか'},
  { name: '但馬 香苗', message: '天候不順のみぎり、お元気でご活躍のことと存じます'},
  { name: '板取 俊介', message: 'すっかりご無沙汰いたしまして、申し訳ありません'},
  { name: '美和 光', message: '平素は何かとお心にかけて下さいまして有難うございます'},
]

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  comments: Comment[]

  constructor() {
    this.comments = mockComments
  }
}
