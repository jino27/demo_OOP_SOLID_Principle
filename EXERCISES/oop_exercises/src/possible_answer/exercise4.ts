abstract class Notification {
  abstract send(message: string): void;
}

class EmailNotification extends Notification {
  send(message: string): void {
    console.log("Sending Email:", message);
  }
}

class SMSNotification extends Notification {
  send(message: string): void {
    console.log("Sending SMS:", message);
  }
}

const notifs: Notification[] = [
  new EmailNotification(),
  new SMSNotification(),
];

notifs.forEach(n => n.send("Welcome!"));
