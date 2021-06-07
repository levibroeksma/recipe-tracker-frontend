import "./Home-page.css"
import Recipe from "../../components/Recipe/Recipe";
function HomePage() {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Welcome to <img src={require('../../logo.svg').default} alt="logo RecipeTracker"/></h1>
                    <div className="welcome-text">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    </div>
                </div>
            </div>
            <div className="page-wrapper blue">
                <div className="page-wrapper-inner left">
                    <h2>Highlighted</h2>
                    <div className="my-recipe-wrapper">
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                    </div>
                </div>
            </div>
            <div className="page-wrapper">
                <div className="page-wrapper-inner left">
                    <h2>All time favorites</h2>
                    <div className="my-recipe-wrapper">
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;