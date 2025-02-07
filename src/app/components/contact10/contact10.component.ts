import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact10',
  templateUrl: 'contact10.component.html',
  styleUrls: ['contact10.component.css'],
})
export class Contact10 {
  @ContentChild('location2Description')
  location2Description: TemplateRef<any>
  @ContentChild('location2')
  location2: TemplateRef<any>
  @Input()
  location2ImageSrc: string =
    'https://images.unsplash.com/photo-1479267658415-ff274a213280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  location1ImageSrc: string =
    'https://images.unsplash.com/photo-1562388364-cfca9bff0b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  location1ImageAlt: string = 'Night Owl Repairs Office Image'
  @ContentChild('location1Description')
  location1Description: TemplateRef<any>
  @Input()
  rootClassName: string = ''
  @Input()
  location2ImageAlt: string = 'Online Support Image'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('location1')
  location1: TemplateRef<any>
  constructor() {}
}
