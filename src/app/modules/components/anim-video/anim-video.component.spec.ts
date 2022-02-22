import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimVideoComponent } from './anim-video.component';

describe('AnimVideoComponent', () => {
  let component: AnimVideoComponent;
  let fixture: ComponentFixture<AnimVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
