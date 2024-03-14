import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdComponentComponent } from './md-component.component';

describe('MdComponentComponent', () => {
  let component: MdComponentComponent;
  let fixture: ComponentFixture<MdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
