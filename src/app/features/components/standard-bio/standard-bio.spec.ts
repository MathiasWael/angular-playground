import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardBio } from './standard-bio';

describe('StandardBio', () => {
  let component: StandardBio;
  let fixture: ComponentFixture<StandardBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
