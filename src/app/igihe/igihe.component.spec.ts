import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgiheComponent } from './igihe.component';

describe('IgiheComponent', () => {
  let component: IgiheComponent;
  let fixture: ComponentFixture<IgiheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgiheComponent]
    });
    fixture = TestBed.createComponent(IgiheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
