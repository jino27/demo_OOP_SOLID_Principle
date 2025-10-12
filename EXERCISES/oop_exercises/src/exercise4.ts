class Notification {
  send(type: string, message: string) {
    if (type === "email") console.log("Sending Email:", message);
    else if (type === "sms") console.log("Sending SMS:", message);
    else console.log("Unknown type");
  }
}

new Notification().send("email", "Welcome!");
