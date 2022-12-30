import { Notification } from "src/application/entities/notification";
import { SendNotification } from "./send-notifications";

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  }
}

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id'
    })

    console.log(notifications);

    expect(notifications).toHaveLength(1)
  });
});