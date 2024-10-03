async function getPizza() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const result = await response.json();
    const recipes = result.recipes;
    const count = result.count;

    const pizza = recipes.map(function (recipe) {
        return `
        <div class='pizza'>
        <img src='${recipe.image_url}'/>
        <h2>${recipe.title}</h2>
        </div>
        
        `
    }).join(" ");

    document.querySelector('.container .row').innerHTML = pizza;

}

getPizza();