import { Component, input } from "@angular/core";

@Component({
  selector: 'app-input-message-error',
  templateUrl: './input-message-error.component.html',
  styleUrl: './input-message-error.component.scss'
})
export class InputMessageErrorComponent {
  message = input.required()
  color = input('#ff0000')
}
