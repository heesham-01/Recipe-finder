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
        if (recipeName !== "") {
            sectionTitle.textContent = "Searched Results:"
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

    recipeBlock.innerHTML = `
                <div class="recipe-container">
                    <div class="chinese-rice-image">
                        <img src="./Images/Chinese Rice image.png" alt="">
                    </div>

                    <div class="recipe-text-block">
                        <div class="recipe-title">
                            <p>Chinese Rice</p>
                        </div>

                        <div class="benefit-container">
                            <div class="rating-container">
                                <i class="fa-solid fa-star"></i>
                                <p>4.2</p>
                            </div>

                            <div class="time-container">
                                <i class="fa-solid fa-hourglass-start"></i>
                                <p class="four-five">45</p>
                                <p class="mins">mins</p>
                            </div>

                            <div class="serving-container">
                                <img src="./Images/Serving icon.svg" alt="">
                                <p class="two">2</p>
                                <p class="people">People</p>
                            </div>
                        </div>

                        <div class="view-recipe-container">
                        
                            <a href="./chinese-rice.html" class="anchor view-recipe-container"><p class="view-text-container">View Recipe</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div class="recipe-container">
                    <div class="chinese-rice-image">
                        <img src="./Images/Pizza.svg" alt="">
                    </div>

                    <div class="recipe-text-block">
                        <div class="recipe-title">
                            <p>Pizza</p>
                        </div>

                        <div class="benefit-container">
                            <div class="rating-container">
                                <i class="fa-solid fa-star"></i>
                                <p>4.9</p>
                            </div>

                            <div class="time-container">
                                <i class="fa-solid fa-hourglass-start"></i>
                                <p class="four-five">30</p>
                                <p class="mins">mins</p>
                            </div>

                            <div class="serving-container">
                                <img src="./Images/Serving icon.svg" alt="">
                                <p class="two">8</p>
                                <p class="people">People</p>
                            </div>
                        </div>

                        <div class="view-recipe-container">
                            
                            <a href="#" class="anchor view-recipe-container"><p class="view-text-container">View Recipe</p>
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        
                        </div>
                    </div>
                </div>

                <div class="recipe-container">
                    <div class="chinese-rice-image">
                        <img src="./Images/Fried rice image (2).svg" alt="">
                    </div>

                    <div class="recipe-text-block">
                        <div class="recipe-title">
                            <p>Fried Rice</p>
                        </div>

                        <div class="benefit-container">
                            <div class="rating-container">
                                <i class="fa-solid fa-star"></i>
                                <p>4.2</p>
                            </div>

                            <div class="time-container">
                                <i class="fa-solid fa-hourglass-start"></i>
                                <p class="four-five">25</p>
                                <p class="mins">mins</p>
                            </div>

                            <div class="serving-container">
                                <img src="./Images/Serving icon.svg" alt="">
                                <p class="two">11</p>
                                <p class="people">People</p>
                            </div>
                        </div>

                        <div class="view-recipe-container">
                            
                            <a href="#" class="anchor view-recipe-container"><p class="view-text-container">View Recipe</p>
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        
                        </div>
                    </div>
                </div>
    `;
});


// This will display a succes message
  const form = document.querySelector('form');
  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // this prevent default redirection

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset(); // clear the form
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  });

 