import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { RenewableAskHistory } from '@local/common';

@Component({
  selector: 'view-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css'],
})
export class AskComponent implements OnInit {
  @Input()
  renewableAsk?: RenewableAskHistory | null;

  createdAt?: Date;

  constructor() {
    this.createdAt = (this.renewableAsk?.created_at as Timestamp).toDate();
  }

  ngOnInit(): void {}
}
