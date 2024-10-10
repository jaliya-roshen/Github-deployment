import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreegridIssueComponent } from './treegrid-issue.component';

describe('TreegridIssueComponent', () => {
  let component: TreegridIssueComponent;
  let fixture: ComponentFixture<TreegridIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreegridIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreegridIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
