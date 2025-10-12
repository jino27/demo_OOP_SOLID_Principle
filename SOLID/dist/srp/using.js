"use strict";
// Single Responsibility Principle
class UserRepository {
    addUser(name, email) {
        console.log(`User added: ${name}`);
    }
}
class EmailService {
    sendEmail(email, message) {
        console.log(`Sending email to ${email}: ${message}`);
    }
}
// Demo
const userRepo = new UserRepository();
const emailService = new EmailService();
userRepo.addUser("John", "john@email.com");
emailService.sendEmail("john@email.com", "Welcome!");
//# sourceMappingURL=using.js.map