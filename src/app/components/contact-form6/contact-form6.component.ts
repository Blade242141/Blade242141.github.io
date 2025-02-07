import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'contact-form6',
  templateUrl: 'contact-form6.component.html',
  styleUrls: ['contact-form6.component.css'],
})
export class ContactForm6 {
  @Input()
  contactForm6Id: string = ''
  @ContentChild('phone')
  phone: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('email')
  email: TemplateRef<any>
  @ContentChild('action')
  action: TemplateRef<any>
  @ContentChild('address')
  address: TemplateRef<any>
  constructor() {}
}
