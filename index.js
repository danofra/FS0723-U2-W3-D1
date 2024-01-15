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

const nameInput = document.getElementById("namePets");
const ownerInput = document.getElementById("nameOwner");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const saveButton = document.querySelector("form button");

const contactsPets = [];

class Pet {
  constructor(_petName, _ownerName, _species = [], _breed = []) {
    this.namePets = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}
const addPets = function () {
  const row = document.getElementById("cardPets");
  row.innerHTML = "";
  contactsPets.forEach((pet) => {
    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Name Pets: ${pet.namePets}</h5>
                  <h6 class="card-title">Name Owner: ${pet.ownerName}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Species: ${pet.species}</h6>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Breed: ${pet.breed}</h6>
              </div>
          </div>
          `;
    row.appendChild(col);
  });
  namePets.value = "";
  nameOwner.value = "";
  species.value = "";
  breed.value = "";
};
const formPets = document.getElementsByTagName("form")[0];
formPets.addEventListener("submit", function (e) {
  e.preventDefault();
  const newPet = new Pet(
    namePets.value,
    nameOwner.value,
    species.value,
    breed.value
  );

  console.log(newPet);
  contactsPets.push(newPet);
  addPets();
});
