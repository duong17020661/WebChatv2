import { TestBed } from '@angular/core/testing';

import { ChatActivityService } from './chat-activity.service';

describe('ChatActivityService', () => {
  let service: ChatActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
