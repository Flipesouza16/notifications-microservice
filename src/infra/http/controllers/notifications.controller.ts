import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notifications';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotifications: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body

    const { notification } = await this.sendNotifications.execute({
      recipientId,
      content,
      category
    })

    return { notification }
  }
}
