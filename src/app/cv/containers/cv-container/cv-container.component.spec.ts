import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CvContainerComponent } from './cv-container.component';

describe('CvContainerComponent', () => {
  let component: CvContainerComponent;
  let fixture: ComponentFixture<CvContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CvContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
