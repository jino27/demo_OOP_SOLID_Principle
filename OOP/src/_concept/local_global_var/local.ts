function increaseLocal() {
  let localCount = 0; // local variable
  localCount++;
  console.log("Local count:", localCount);
}

increaseLocal(); // 1
increaseLocal(); // 1 (resets every call)
