import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repositoriy";

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}