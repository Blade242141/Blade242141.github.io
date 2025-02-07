import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero17',
  templateUrl: 'hero17.component.html',
  styleUrls: ['hero17.component.css'],
})
export class Hero17 {
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1620368523722-1883b82aabd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Hero Image'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1546702954-0aeeb47832a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1518350852669-754439193642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Alt: string = 'Hero Image'
  @Input()
  image2Alt: string = 'Hero Image'
  @Input()
  image1Alt: string = 'Night Owl Repairs Logo'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  image4Alt: string = 'Hero Image'
  @Input()
  image5Alt: string = 'Hero Image'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  hero17Id: string = ''
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1533197725337-820b6ab1730c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1696603972086-ea3ad7be27b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('action2')
  action2: TemplateRef<any>
  constructor() {}
}
