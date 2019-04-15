import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationModuleComponent } from './configuration-module.component';

describe('ConfigurationModuleComponent', () => {
  let component: ConfigurationModuleComponent;
  let fixture: ComponentFixture<ConfigurationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
