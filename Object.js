// Object
const data = {
  user1: "",
  num: 3,
};

const student = {
  name: " Favour",
  grades: {
    English: "A1",
    Biology: "A1",
    Accounting: "A1",
  },
};
console.log(student);

//prototype
const animal = {
  type: "unknown",
  sound: "none",
  makeSound() {
    console.log(this.sound);
  },
};
const dog = Object.keys(animal);
dog.type = "dog";
dog.sound = "woof";
console.log(dog);

//Object.assign
const defaultsettings = {
  theme: "light",
  notification: true,
  fontsize: 16,
};
const usersettings = { fontsize: 20 };

const newsettings = Object.assign({}, defaultsettings, usersettings);
console.log(newsettings);

//Object.entries
const person = [
  ["name", "john"],
  ["age", 18],
  ["city", "Lagos"],
];
console.log(Object.fromEntries(person));

//Using spread operator

const original = { A: 77, B: 66 };
const final = { ...original, C: 55 };
console.log(final);
