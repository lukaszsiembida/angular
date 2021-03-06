import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentComponentComponent } from './tab-content-component.component';

describe('TabContentComponentComponent', () => {
  let component: TabContentComponentComponent;
  let fixture: ComponentFixture<TabContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
