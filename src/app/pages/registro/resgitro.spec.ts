import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resgitro } from './resgitro';

describe('Resgitro', () => {
  let component: Resgitro;
  let fixture: ComponentFixture<Resgitro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resgitro],
    }).compileComponents();

    fixture = TestBed.createComponent(Resgitro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
