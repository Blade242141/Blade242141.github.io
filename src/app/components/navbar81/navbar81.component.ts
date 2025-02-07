import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-navbar81',
  templateUrl: 'navbar81.component.html',
  styleUrls: ['navbar81.component.css'],
})
export class Navbar81 {
  @ContentChild('page2')
  page2: TemplateRef<any>
  @Input()
  page3ImageAlt1: string = 'About Us Image'
  @Input()
  page2ImageAlt1: string = 'Services Image'
  @ContentChild('page31')
  page31: TemplateRef<any>
  @Input()
  linkUrlPage21: string = 'https://www.teleporthq.io'
  @Input()
  page3ImageSrc1: string =
    'https://images.unsplash.com/photo-1518303211906-1001096542b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0N3w&ixlib=rb-4.0.3&q=80&w=1400'
  @Input()
  page2ImageAlt: string = 'image'
  @Input()
  linkUrlPage3: string = 'https://www.teleporthq.io'
  @Input()
  page4ImageSrc1: string =
    'https://images.unsplash.com/photo-1529552008565-aee9a9b4e769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0N3w&ixlib=rb-4.0.3&q=80&w=1400'
  @ContentChild('page3')
  page3: TemplateRef<any>
  @Input()
  page4ImageAlt: string = 'image'
  @ContentChild('link2')
  link2: TemplateRef<any>
  @ContentChild('link4')
  link4: TemplateRef<any>
  @ContentChild('page4Description')
  page4Description: TemplateRef<any>
  @ContentChild('page1Description1')
  page1Description1: TemplateRef<any>
  @ContentChild('link1')
  link1: TemplateRef<any>
  @Input()
  page1ImageAlt1: string = 'Home Image'
  @ContentChild('page11')
  page11: TemplateRef<any>
  @ContentChild('page3Description1')
  page3Description1: TemplateRef<any>
  @Input()
  page4ImageAlt1: string = 'Contact Image'
  @ContentChild('page4Description1')
  page4Description1: TemplateRef<any>
  @Input()
  page2ImageSrc1: string =
    'https://images.unsplash.com/photo-1600414428654-bdee5b7af614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzgzODk0N3w&ixlib=rb-4.0.3&q=80&w=1400'
  @Input()
  page2ImageSrc: string = '/assets/repair-tools-200h.png'
  @Input()
  link2Url: string = 'https://www.teleporthq.io'
  @ContentChild('link31')
  link31: TemplateRef<any>
  @Input()
  rootClassName: string = ''
  @Input()
  linkUrlPage11: string = 'https://www.teleporthq.io'
  @ContentChild('page3Description')
  page3Description: TemplateRef<any>
  @ContentChild('page41')
  page41: TemplateRef<any>
  @Input()
  link3Url: string = 'https://www.teleporthq.io'
  @ContentChild('page2Description1')
  page2Description1: TemplateRef<any>
  @ContentChild('page21')
  page21: TemplateRef<any>
  @ContentChild('page1Description')
  page1Description: TemplateRef<any>
  @Input()
  linkUrlPage31: string = 'https://www.teleporthq.io'
  @Input()
  page3ImageAlt: string = 'image'
  @Input()
  page1ImageSrc: string = '/assets/house-200h.png'
  @ContentChild('page1')
  page1: TemplateRef<any>
  @Input()
  link4Url: string = 'https://www.teleporthq.io'
  @Input()
  page1ImageSrc1: string = '/assets/house-200h.png'
  @Input()
  logoSrc: string = '/assets/untitled_artwork%201-1500h.png'
  @ContentChild('page4')
  page4: TemplateRef<any>
  @Input()
  link1Url: string = 'https://www.teleporthq.io'
  @ContentChild('link3')
  link3: TemplateRef<any>
  @Input()
  linkUrlPage4: string = 'https://www.teleporthq.io'
  @Input()
  page4ImageSrc: string = '/assets/contacts-200h.png'
  @Input()
  linkUrlPage41: string = 'https://www.teleporthq.io'
  @Input()
  page1ImageAlt: string = 'image'
  @ContentChild('page2Description')
  page2Description: TemplateRef<any>
  @Input()
  page3ImageSrc: string = '/assets/id-card-200h.png'
  @Input()
  linkUrlPage1: string = 'https://www.teleporthq.io'
  @Input()
  logoAlt: string = 'logo'
  @Input()
  linkUrlPage2: string = 'https://www.teleporthq.io'
  link5DropdownVisible: boolean = false
  link5AccordionOpen: boolean = false
  constructor() {}
}
