// Adding Event Handler on Search Button...............................

const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", function(){
    document.getElementById('meal-details').innerHTML = '';

    let inputText = document.getElementById('input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
   
    fetch(url)
    .then( res => res.json())
    .then( data => showMeals(data))
    .catch( error => alert(`
    Nothing Found!!!
    Please Try Again.
    `));

    document.getElementById('input').value = '';
    document.getElementById('meals').innerHTML = ''; 
});
//Function to Show Meals in a Grid View......................................

const showMeals = mealsCount => {
    const mealsArray = mealsCount.meals;
    const allMeals = document.getElementById('meals');

    mealsArray.forEach(meal => {
        
        const singleMeal = document.createElement('div');
        const mealItems = `
                <div id="meal-div" onclick = '{callMealDetails("${meal.strMeal}")}'>
                    <img src="${meal.strMealThumb}">
                    <h3>${meal.strMeal}</h3>
                </div>
            `;
        singleMeal.innerHTML = mealItems;
        allMeals.appendChild(singleMeal);
    });
      
}
// Function to call API matching individual Item Name.......................

const callMealDetails = (clickedMeal,) => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${clickedMeal}`;

    fetch(url)
    .then( res => res.json())
    .then( data => showSingleMeal(data))
    .catch( error => alert(`
    Nothing Found!!!
    Please Try Again.
    `));
}
// Function to Show Single Item Details When Clicked...........................

const showSingleMeal = meal => {
    
    const mealObject = meal.meals[0];
   
    const singleMeal = document.getElementById('meal-details');
    document.getElementById('meal-details').innerHTML = '';
    
    const singleMealCreate = document.createElement('div');
        singleMealCreate.className = "clicked-item";
        const mealIngredients = `
                <img src="${mealObject.strMealThumb}">
                <h3>${mealObject.strMeal}</h3>
                <h4>INGREDIENTS</h4>
                <p>${mealObject.strMeasure1} ${mealObject.strIngredient1} </p>
                <p>${mealObject.strMeasure2} ${mealObject.strIngredient2} </p>
                <p>${mealObject.strMeasure3} ${mealObject.strIngredient3} </p>
                <p>${mealObject.strMeasure4} ${mealObject.strIngredient4} </p>
                <p>${mealObject.strMeasure5} ${mealObject.strIngredient5} </p>
                <p>${mealObject.strMeasure6} ${mealObject.strIngredient6} </p>
                <p>${mealObject.strMeasure7} ${mealObject.strIngredient7} </p>
                <p>${mealObject.strMeasure8} ${mealObject.strIngredient8} </p>
                <p>${mealObject.strMeasure9} ${mealObject.strIngredient9} </p>
                <p>${mealObject.strMeasure10} ${mealObject.strIngredient10} </p>
                
            `;
        singleMealCreate.innerHTML = mealIngredients;
        singleMeal.appendChild(singleMealCreate);
        document.getElementById('input').value = '';
        
}
