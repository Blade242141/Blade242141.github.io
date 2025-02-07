import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawd5p1: string = ' '
  rawvacb: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Bold Imaginary Mongoose')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Bold Imaginary Mongoose',
      },
    ])
  }
}
