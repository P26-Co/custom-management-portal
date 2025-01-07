import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantManagerComponent } from './tenant-manager.component';

describe('ClientComponent', () => {
  let component: TenantManagerComponent;
  let fixture: ComponentFixture<TenantManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantManagerComponent]
    });
    fixture = TestBed.createComponent(TenantManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
