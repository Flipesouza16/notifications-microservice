import { Body, Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { CancelNotification } from '@application/use-cases/cancel-notification/cancel-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification/unread-notification';
import { SendNotification } from 'src/application/use-cases/send-notifications/send-notifications';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notificationViewModel';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotifications: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotification: CountRecipientNotification,
    private getRecipientNotification: GetRecipientNotification,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id
    });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({
      recipientId
    });

    return { count }
  }
  
  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({
      recipientId
    });

    return { 
      notifications: notifications.map(NotificationViewModel.toHttp)
    }
  }
  
  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id
    });
  }
  
  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id
    });
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body

    const { notification } = await this.sendNotifications.execute({
      recipientId,
      content,
      category
    })

    return { 
      notification: NotificationViewModel.toHttp(notification)
    }
  }
}
