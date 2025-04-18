import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  //  The messageService property must be public because you're going to bind to
  // it in the template.
  // Angular only binds to public component properties.

  constructor(public messageService: MessageService) {}
}
