import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingShowComponent } from './ranking-show.component';

describe('RankingShowComponent', () => {
  let component: RankingShowComponent;
  let fixture: ComponentFixture<RankingShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
