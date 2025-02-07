import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-cta26',
  templateUrl: 'cta26.component.html',
  styleUrls: ['cta26.component.css'],
})
export class CTA26 {
  @Input()
  imageAlt2: string = 'image'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @Input()
  imageSrc2: string = '/assets/logo%20sharp-200h.png'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  cTA26Id: string = ''
  rawbyq1: string = ' '
  raweyi1: string = ' '
  constructor() {}
}
