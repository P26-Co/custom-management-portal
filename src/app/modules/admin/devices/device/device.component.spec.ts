import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceComponent } from './device.component';

describe('ClientComponent', () => {
  let component: DeviceComponent;
  let fixture: ComponentFixture<DeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceComponent]
    });
    fixture = TestBed.createComponent(DeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
