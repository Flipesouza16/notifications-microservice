export class NotificationNotFound extends Error {
  constructor() {
    super('Notifications not found.');
  }
}