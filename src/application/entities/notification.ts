import { Content } from "./content";

export interface NotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set content(content: Content) {
    if(content.value.length < 5) {
      throw new Error();
    }

    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }
 
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }
 
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createAt(): Date {
    return this.props.createAt;
  }
}