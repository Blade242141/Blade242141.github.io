import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'form-complete',
  templateUrl: 'form-complete.component.html',
  styleUrls: ['form-complete.component.css'],
})
export class FormComplete {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('FormComplete - Bold Imaginary Mongoose')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'FormComplete - Bold Imaginary Mongoose',
      },
    ])
  }
}
