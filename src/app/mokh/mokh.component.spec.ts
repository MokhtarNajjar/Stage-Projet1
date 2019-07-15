import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MokhComponent } from './mokh.component';

describe('MokhComponent', () => {
  let component: MokhComponent;
  let fixture: ComponentFixture<MokhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MokhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MokhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
