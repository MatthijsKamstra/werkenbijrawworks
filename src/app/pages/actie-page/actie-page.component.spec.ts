import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiePageComponent } from './actie-page.component';

describe('ActiePageComponent', () => {
  let component: ActiePageComponent;
  let fixture: ComponentFixture<ActiePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
