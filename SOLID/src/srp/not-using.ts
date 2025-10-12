class UserService {
  addUser(name: string, email: string) {
    console.log(`User added: ${name}`);
  }

  sendEmail(email: string, message: string) {
    console.log(`Sending email to ${email}: ${message}`);
  }
}