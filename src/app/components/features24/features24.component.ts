import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features24',
  templateUrl: 'features24.component.html',
  styleUrls: ['features24.component.css'],
})
export class Features24 {
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1544026230-488aeae72c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature2ImgAlt: string = 'After-Hours Service Image'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1588500085730-c986fcdbeb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgAlt: string = 'Remote Support Image'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @Input()
  features24Id: string = ''
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1632228381657-95ea5af1876a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgAlt: string = 'Local Collection and Diagnosis'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  activeTab: number = 0
  constructor() {}
}
