interface IMessageSender {
  send(message: string): void;
}

class EmailSender implements IMessageSender {
  send(message: string) {
    console.log("Sending EMAIL:", message);
  }
}

class SMSSender implements IMessageSender {
  send(message: string) {
    console.log("Sending SMS:", message);
  }
}

class NotificationService {
  constructor(private sender: IMessageSender) {}

  notifyUser(message: string) {
    this.sender.send(message);
  }
}

const notif1 = new NotificationService(new EmailSender());
notif1.notifyUser("Welcome via Email!");

const notif2 = new NotificationService(new SMSSender());
notif2.notifyUser("Welcome via SMS!");
