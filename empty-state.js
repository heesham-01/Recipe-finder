document.addEventListener("DOMContentLoaded", () => {
    const recipeBlock = document.querySelector(".recipe-block");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const sectionTitle = document.getElementById("section-title");
    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
    const modal = document.getElementById('modal');
    

    // Function to display hamburger in the mobile view
    openBtn?.addEventListener('click', () => {
    modal.classList.add('show');
    });

    closeBtn?.addEventListener('click', () => {
    modal.classList.remove('show');
    });

    // Search on button click
    searchButton.addEventListener("click", () => {
        const recipeName = searchInput.value.trim();
        document.getElementById("empty-search-state").style.backgroundColor = "white";
        recipeBlock.style.height = "auto";
        if (recipeName !== "") {
            
            fetchRecipes(recipeName);
        }
    });

    // Function to fetch and display recipes
    async function fetchRecipes(recipeName) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
            const data = await response.json();

            recipeBlock.innerHTML = ""; // Clear previous results

            if (data.meals) {
                data.meals.forEach(meal => {
                    const recipeHTML = `
                        <div class="recipe-container">

                            <div class="chinese-rice-image">
                                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            </div>

                            <div class="recipe-text-block">
                                <div class="recipe-title">
                                    <p>${meal.strMeal}</p>
                                </div>
                                
                                <div class="view-recipe-container">
                        
                                    <a href="${meal.strSource}" class="anchor view-recipe-container"><p class="view-text-container">View Recipe</p>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </a>
                            
                                 </div>

                            </div>
                        </div>
                    `;

                    recipeBlock.innerHTML += recipeHTML;
                });
            } else {
                recipeBlock.innerHTML = `<p>No results found for "<strong>${recipeName}</strong>"</p>`;
            }

        } catch (error) {
            console.error("Error fetching recipes:", error);
            recipeBlock.innerHTML = "<p>Something went wrong. Please try again later.</p>";
        }
    }

    // Fetch default recipes on load (optional)
    // fetchRecipes("beans");

    

});

