import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Header78 } from './header78/header78.component'
import { Testimonial17 } from './testimonial17/testimonial17.component'
import { Features25 } from './features25/features25.component'
import { CTA26 } from './cta26/cta26.component'
import { Features24 } from './features24/features24.component'
import { Contact10 } from './contact10/contact10.component'
import { Pricing14 } from './pricing14/pricing14.component'
import { Navbar81 } from './navbar81/navbar81.component'
import { Footer4 } from './footer4/footer4.component'
import { Hero17 } from './hero17/hero17.component'
import { ContactForm6 } from './contact-form6/contact-form6.component'
import { Steps2 } from './steps2/steps2.component'

@NgModule({
  declarations: [
    Header78,
    Testimonial17,
    Features25,
    CTA26,
    Features24,
    Contact10,
    Pricing14,
    Navbar81,
    Footer4,
    Hero17,
    ContactForm6,
    Steps2,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Header78,
    Testimonial17,
    Features25,
    CTA26,
    Features24,
    Contact10,
    Pricing14,
    Navbar81,
    Footer4,
    Hero17,
    ContactForm6,
    Steps2,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
