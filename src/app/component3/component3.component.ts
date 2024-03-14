import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `
    <h1 class="component3">
      component with both inline template and inline style
    </h1>
  `,
  styles: `.component3{color:blue}`,
})
export class Component3Component {}
