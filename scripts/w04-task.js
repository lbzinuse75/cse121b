/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Becky Lutz",
    photo: "images/IMG_6989_Original.jpg",
    favoriteFoods: [
        "chicken and rice",
        "Chinese food",
        "salmon and asparagus",
        "steak, potatoes, and broccoli",
    ],
    hobbies: [
        "hiking",
        "sewing",
        "gardening",
        "reading",
        "biking",
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Garland, UT",
        length: "19 years",
    },
    {
        place: "Rexburg, ID",
        length: "2 1/2 years", 
    },
    {
        place: "Detroit, MI",
        length: "1 1/2 years",
    },
    {
        place: "West Jordan, UT",
        length: "4 years",
    },
    {
        place: "Murray, UT",
        length: "10 years",
    },
    {
        place: "West Jordan, UT",
        length: "5 years",
    },
    {
        place: "Garland, UT",
        length: "3 1/2 years",
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

