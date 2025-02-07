import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-testimonial17',
  templateUrl: 'testimonial17.component.html',
  styleUrls: ['testimonial17.component.css'],
})
export class Testimonial17 {
  @Input()
  author4Alt: string = 'Image of Emily Roberts'
  @Input()
  rootClassName: string = ''
  @ContentChild('review3')
  review3: TemplateRef<any>
  @ContentChild('author3Name')
  author3Name: TemplateRef<any>
  @ContentChild('author1Position')
  author1Position: TemplateRef<any>
  @ContentChild('review1')
  review1: TemplateRef<any>
  @ContentChild('author4Name')
  author4Name: TemplateRef<any>
  @Input()
  author1Alt: string = 'Image of John Smith'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('author2Name')
  author2Name: TemplateRef<any>
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  testimonial17Id: string = ''
  @Input()
  author3Alt: string = 'Image of Michael Chang'
  @ContentChild('author4Position')
  author4Position: TemplateRef<any>
  @Input()
  author2Alt: string = 'Image of Sarah Johnson'
  @ContentChild('review2')
  review2: TemplateRef<any>
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('author1Name')
  author1Name: TemplateRef<any>
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1619995576966-dd70cf319da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('review4')
  review4: TemplateRef<any>
  @ContentChild('author3Position')
  author3Position: TemplateRef<any>
  @ContentChild('author2Position')
  author2Position: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
