import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { FormComplete } from './form-complete.component'

const routes = [
  {
    path: '',
    component: FormComplete,
  },
]

@NgModule({
  declarations: [FormComplete],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [FormComplete],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormCompleteModule {}
