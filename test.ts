
type Animal = {
  name: string;
};

type Cat = Animal & {
  meows: string;
}

function isCat(animal: Cat | Animal) {
  return "meows" in animal;
}

function test(animal: Cat | Animal) {
  if(isCat(animal)) {
      console.log(animal.meows); // error
  } else {
      console.log(animal.name);
  }
}

test({name: "cat", meows: "meow"});