import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowersItemComponent } from './profile-followers-item.component';

describe('ProfileFollowersItemComponent', () => {
  let component: ProfileFollowersItemComponent;
  let fixture: ComponentFixture<ProfileFollowersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
