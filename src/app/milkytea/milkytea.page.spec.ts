import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkyteaPage } from './milkytea.page';

describe('MilkyteaPage', () => {
  let component: MilkyteaPage;
  let fixture: ComponentFixture<MilkyteaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MilkyteaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
