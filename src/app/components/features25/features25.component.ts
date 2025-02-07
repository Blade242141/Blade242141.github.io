import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features25',
  templateUrl: 'features25.component.html',
  styleUrls: ['features25.component.css'],
})
export class Features25 {
  @Input()
  feature2ImgAlt: string = 'After Hours Support Image'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1709733007536-8139dc5edaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @Input()
  feature1ImgAlt: string = 'Local Collection and Diagnosis Image'
  @Input()
  feature3ImgAlt: string = 'Remote Support Image'
  activeTab: number = 0
  constructor() {}
}
