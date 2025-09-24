export async function fetchDishes() {
  try {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=japanese&number=6&apiKey=5456212a3f0c48cda70909fda5eb4484`
    );
    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.error("Erro ao buscar pratos:", error);
    return [];
  }
}
