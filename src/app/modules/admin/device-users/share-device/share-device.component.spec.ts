import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDeviceComponent } from './share-device.component';

describe('ClientComponent', () => {
  let component: ShareDeviceComponent;
  let fixture: ComponentFixture<ShareDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareDeviceComponent]
    });
    fixture = TestBed.createComponent(ShareDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
