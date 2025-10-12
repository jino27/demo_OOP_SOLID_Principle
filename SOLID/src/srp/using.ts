// Single Responsibility Principle

class UserRepository {
  addUser(name: string, email: string): void {
    console.log(`User added: ${name}`);
  }
}

class EmailService {
  sendEmail(email: string, message: string): void {
    console.log(`Sending email to ${email}: ${message}`);
  }
}

// Demo
const userRepo = new UserRepository();
const emailService = new EmailService();

userRepo.addUser("John", "john@email.com");
emailService.sendEmail("john@email.com", "Welcome!");
