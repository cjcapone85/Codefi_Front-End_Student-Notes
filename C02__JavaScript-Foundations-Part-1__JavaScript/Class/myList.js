 const food= [
    {
    type= "pizza", cost= 4,           
    },            
    {
    type= "hot dog", cost=2,          
    },
    {
    type="nachos", cost=3,            
    },
        ];

const foodList=document.querySelector(".food-list");




for(let food of food){
    
    console.log(food);
}


//[ ] Create a list of objects, each having a food name and its price
 //[ ] Loop over that list, dynamically create a new list item `<li></li>` with the food name inside, and append that item to an existing HTML `<ul></ul>` element