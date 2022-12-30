import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  it('should be abre to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Você recebeu uma solicidtação de amizade'),
      category: 'social',
    });
    
    expect(notification).toBeTruthy();
  });
})