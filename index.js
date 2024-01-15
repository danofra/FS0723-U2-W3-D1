const ageUser = [];
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this._location = _location;
  }
  ages() {
    ageUser.push(this.age);
  }
  comparation(age, nome, cognome) {
    if (this.age < age) {
      console.log(
        `${this.firstName} ${this.lastName} è più giovane di ${nome} ${cognome}`
      );
    } else {
      console.log(
        `${this.firstName} ${this.lastName} è più vecchio di ${nome} ${cognome}`
      );
    }
  }
}

const user1 = new User("Liborio Daniele", "Frasca", 26, "Vittoria");
const user2 = new User("Lucio", "Battisti", 55, "Roma");
const user3 = new User("Adriano", "Celentano", 86, "Bologna");
const user4 = new User("Vasco", "Rossi", 71, "Zocca");
const user5 = new User("Cristiano ", "Mangioglio", 78, "Ramacca");

user1.ages();
user2.ages();
user3.ages();
user4.ages();
user5.ages();
console.log(ageUser);
user1.comparation(user2.age, user2.firstName, user2.lastName);
user2.comparation(user1.age, user1.firstName, user1.lastName);
user3.comparation(user2.age, user2.firstName, user2.lastName);
user4.comparation(user3.age, user3.firstName, user3.lastName);
user5.comparation(user4.age, user4.firstName, user4.lastName);
