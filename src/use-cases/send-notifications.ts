import { Content } from "../application/entities/content";
import { Notification } from "../application/entities/notification";

interface SendNotificationRequest {
  recipientId: string
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification
}

export class SendNotification {
  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;
    
    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content)
    })

    return { notification }
  }
}