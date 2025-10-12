let globalCount = 0; // global variable

function increaseGlobal() {
  globalCount++;
  console.log("Global count:", globalCount);
}

increaseGlobal(); // 1
increaseGlobal(); // 2
