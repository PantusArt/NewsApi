import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TophedingComponent } from './topheding.component';

describe('TophedingComponent', () => {
  let component: TophedingComponent;
  let fixture: ComponentFixture<TophedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TophedingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TophedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
