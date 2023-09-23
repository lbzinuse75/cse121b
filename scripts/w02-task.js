/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullname = "Becky Lutz";
let currentYear = new Date().getFullYear();
let profilePicture = "images/IMG_6989_Original.JPG"


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#image");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = `${currentYear}`;
imageElement.setAttribute ("src", profilePicture);
nameElement.setAttribute ("alt", `Profile image of ${fullname}`);


/* Step 5 - Array */
let favoriteFoods = ["pear", "peaches", "cucumbers", "green peppers", "trail mix"]
foodElement.food = `${favoriteFoods}`;
let newFavoriteFood = "popcorn";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
fovoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;