import { SendNotification } from "./send-notifications";

describe('Send notification', () => {
  it('shoul be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    })

    expect(notification).toBeTruthy();
  });
});