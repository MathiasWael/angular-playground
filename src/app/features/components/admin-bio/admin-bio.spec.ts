import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBio } from './admin-bio';

describe('AdminBio', () => {
  let component: AdminBio;
  let fixture: ComponentFixture<AdminBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
