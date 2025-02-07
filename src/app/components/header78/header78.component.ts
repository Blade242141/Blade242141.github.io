import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-header78',
  templateUrl: 'header78.component.html',
  styleUrls: ['header78.component.css'],
})
export class Header78 {
  @Input()
  placeholderImageAlt8: string = 'Hero Image'
  @Input()
  placeholderImageAlt2: string = 'Hero Image'
  @ContentChild('text')
  text: TemplateRef<any>
  @Input()
  placeholderImageSrc: string = '/assets/keyboard-1500w.jpg'
  @Input()
  placeholderImageAlt9: string = 'Hero Image'
  @Input()
  placeholderImageSrc8: string = '/assets/code-1500w.jpg'
  @Input()
  placeholderImageAlt4: string = 'Hero Image'
  @Input()
  placeholderImageSrc7: string = '/assets/owl%20night-1500w.jpg'
  @Input()
  placeholderImageSrc2: string = '/assets/code-1500w.jpg'
  @Input()
  placeholderImageAlt1: string = 'Hero Image'
  @Input()
  placeholderImageSrc4: string =
    'https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxjb21wdXRlcnxlbnwwfHx8fDE3MzgyNTI5MjR8MA&ixlib=rb-4.0.3&w=1500'
  @Input()
  placeholderImageAlt11: string = 'Hero Image'
  @Input()
  placeholderImageAlt6: string = 'Night Owl Repairs Logo'
  @ContentChild('text1')
  text1: TemplateRef<any>
  @Input()
  placeholderImageSrc5: string = '/assets/pc-1500w.jpg'
  @Input()
  placeholderImageSrc9: string =
    'https://images.unsplash.com/photo-1602837385569-08ac19ec83af?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGludGVsfGVufDB8fHx8MTczODI1MzEwMXww&ixlib=rb-4.0.3&w=1500'
  @Input()
  placeholderImageAlt: string = 'Night Owl Repairs Logo'
  @Input()
  placeholderImageAlt3: string = 'Hero Image'
  @Input()
  placeholderImageAlt5: string = 'Hero Image'
  @Input()
  placeholderImageSrc3: string =
    'https://images.unsplash.com/photo-1602837385569-08ac19ec83af?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGludGVsfGVufDB8fHx8MTczODI1MzEwMXww&ixlib=rb-4.0.3&w=1500'
  @Input()
  header78Id: string = ''
  @ContentChild('text2')
  text2: TemplateRef<any>
  @Input()
  placeholderImageSrc10: string =
    'https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxjb21wdXRlcnxlbnwwfHx8fDE3MzgyNTI5MjR8MA&ixlib=rb-4.0.3&w=1500'
  @Input()
  placeholderImageAlt7: string = 'Hero Image'
  @ContentChild('text3')
  text3: TemplateRef<any>
  @Input()
  placeholderImageSrc6: string = '/assets/keyboard-1500w.jpg'
  @Input()
  placeholderImageSrc11: string = '/assets/pc-1500w.jpg'
  @Input()
  placeholderImageAlt10: string = 'Hero Image'
  @Input()
  placeholderImageSrc1: string = '/assets/owl%20night-1500w.jpg'
  constructor() {}
}
