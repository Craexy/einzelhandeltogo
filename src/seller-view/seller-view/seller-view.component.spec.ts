import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewComponent } from './seller-view.component';

describe('SellerViewComponent', () => {
  let component: SellerViewComponent;
  let fixture: ComponentFixture<SellerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
