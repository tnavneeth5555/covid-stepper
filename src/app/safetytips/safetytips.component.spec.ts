import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetytipsComponent } from './safetytips.component';

describe('SafetytipsComponent', () => {
  let component: SafetytipsComponent;
  let fixture: ComponentFixture<SafetytipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetytipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetytipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
