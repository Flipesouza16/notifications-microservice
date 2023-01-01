import { NotificationsRepository } from "../repositories/notifications-repositoriy";
import { Injectable } from "@nestjs/common";
import { Notification } from "@application/entities/notification";

interface GetRecipientNotificationRequest {
  recipientId: string
}

interface GetRecipientNotificationResponse {
  notifications: Notification[]
};

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;
    
    const notifications = await this.notificationsRepository.findManyRecipientId(recipientId);

    return { notifications }
  }
}