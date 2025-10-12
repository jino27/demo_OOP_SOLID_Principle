class EmailSender {
  sendEmail(message: string) {
    console.log("Sending email:", message);
  }
}

class NotificationService {
  private email = new EmailSender();

  notifyUser(message: string) {
    this.email.sendEmail(message);
  }
}
