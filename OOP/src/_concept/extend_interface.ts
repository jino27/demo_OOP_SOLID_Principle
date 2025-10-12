interface Person {
  name: string;
}

interface Worker {
  company: string;
}

interface Developer extends Person, Worker {
  programmingLanguage: string;
}

const dev: Developer = {
  name: "Jhon",
  company: "XYZ",
  programmingLanguage: "TypeScript"
};

console.log(dev);
