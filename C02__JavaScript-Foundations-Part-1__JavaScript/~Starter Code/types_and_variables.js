// * string * \\
//"4";
//"vehicle";
// * number * \\
//2;
//50;

// * boolean * \\
//true;
//false;

// * special * \\
//null;
//NaN;
//undefined;

// * object * \\
//car= {
 //   make: Nissan,
//    model: Altima
//};
//car.model="Altima"

// * array * \\
//food=["pizza", "cake", "carrots"];
//food[1] = "cake"
// * Declaring Variables * \\

//let mood;
//mood = "exhausted";


const groceryList = [
    {name: 'Apples', price: '30'},
    {name: 'Bananas', price: '30'},
    {name: 'Pears', price: '30'},
    {name: 'Spinach', price: '30'},
    {name: 'Chips', price: '30'},
];

const foodList= document.querySelector(".food-list")

for(let item of groceryList) {

    const listItem = document.createElement('li');
    console.log("List Item", listItem)
    listItem.innerText = item.name;
    console.log(listItem);
    foodList.appendChild(listItem);
}



/*[ ] Create a list of objects, each having a food name and its price

 [ ] Loop over that list, dynamically create a new list item `<li></li>` with the food name inside, and append that item to an existing HTML `<ul></ul>` element
// 1. Loop over the groceryList
// 2. Create an <li></li> element
// 3. Place the current food inside the <li></li> element
// 4. Append <li></li> to existing <ul></ul>
// 5. Create or Link to a <ul></ul> element
 */


