import { CancelNotification } from "@application/use-cases/cancel-notification/cancel-notification";
import { CountRecipientNotification } from "@application/use-cases/count-recipient-notifications/count-recipient-notifications";
import { GetRecipientNotification } from "@application/use-cases/get-recipient-notifications/get-recipient-notifications";
import { ReadNotification } from "@application/use-cases/read-notification/read-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification/unread-notification";
import { Module } from "@nestjs/common";
import { SendNotification } from "src/application/use-cases/send-notifications/send-notifications";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotification,
    CountRecipientNotification
  ]
})
export class HttpModule {}