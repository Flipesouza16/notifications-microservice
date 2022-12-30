import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "../../../../application/repositories/notifications-repositoriy";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {

  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createAt: notification.createAt
      }
    })
  }
}