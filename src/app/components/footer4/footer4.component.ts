import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-footer4',
  templateUrl: 'footer4.component.html',
  styleUrls: ['footer4.component.css'],
})
export class Footer4 {
  @ContentChild('link3')
  link3: TemplateRef<any>
  @ContentChild('link2')
  link2: TemplateRef<any>
  @ContentChild('link11')
  link11: TemplateRef<any>
  @Input()
  logoAlt: string = 'Night Owl Repairs Logo'
  @Input()
  logoSrc: string = '/assets/logo%20sharp-1500h.png'
  @ContentChild('link4')
  link4: TemplateRef<any>
  @ContentChild('link1')
  link1: TemplateRef<any>
  @ContentChild('link5')
  link5: TemplateRef<any>
  constructor() {}
}
