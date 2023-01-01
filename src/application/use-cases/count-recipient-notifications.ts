import { NotificationsRepository } from "../repositories/notifications-repositoriy";
import { Injectable } from "@nestjs/common";

interface CountRecipientNotificationRequest {
  recipientId: string
}

interface CountRecipientNotificationResponse {
  count: number
};

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;
    
    const count = await this.notificationsRepository.countManyByRecipientById(recipientId);

    return { count }
  }
}