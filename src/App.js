import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import {Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/Home-page/Home-page";
import AboutUs from "./Pages/About-us";
import RecipePage from "./Pages/Recipe-page/Recipe-page";
import ContactPage from "./Pages/Contact/Contact-page";
import ThankYou from "./Pages/Contact/Thank-you";
import AccountPage from "./Pages/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegisterPage from "./Pages/SignUp/SignUp";
import TermsAndConditions from "./Pages/Terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/Privacy-policy/Privacy-policy-page";
import RegistrationConfirmation from "./Pages/Forgot-password/Registration-confirmation-page";
import MyAccount from "./Pages/My-account-page/My-account-page";
import ForgotPasswordPage from "./Pages/Forgot-password/Forgot-password-page";
import AddRecipe from "./Pages/Add-recipe-page/AddRecipe";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RecipeDetailPage from "./Pages/Recipe-detail-page/RecipeDetailPage";
import UploadedRecipe from "./Pages/Add-recipe-page/UploadedRecipe";
import Test from "./Pages/Test";

export default function App() {
  return (
    <>
      <ScrollToTop/>
      <Header logo={logo}/>
      <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route exact={true} path="/recipes" component={RecipePage} />
          <Route exact={true} path="/recipes/:id" component={RecipeDetailPage}/>
          <Route exact={true} path="/recipe-uploaded" component={UploadedRecipe}/>
          <Route exact={true} component={AboutUs} path="/about-us"/>
          <Route exact={true} path="/contact" component={ContactPage}/>
          <Route exact={true} path="/contact/thank-you" component={ThankYou}/>
          <Route exact={true} path="/sign-in" component={AccountPage}/>
          <ProtectedRoute exact={true} path="/my-account" component={MyAccount}/>
          <Route exact={true} path="/forgot-password" component={ForgotPasswordPage}/>
          <ProtectedRoute exact={true} path="/add-recipe" component={AddRecipe} />
          <Route exact={true} path="/add-recipe" component={AddRecipe}/>
          <Route exact={true} path="/register" component={RegisterPage}/>
          <Route exact={true} path="/register/confirmation" component={RegistrationConfirmation}/>
          <Route exact={true} path="/terms-and-conditions" component={TermsAndConditions}/>
          <Route exact={true} path="/privacy-policy" component={PrivacyPolicy}/>
          <Route exact={true} path="/test" component={Test}/>
          <Route path="/*" component={() => { return <h1>404 PAGE NOT FOUND</h1>}}/>
      </Switch>
      <Footer />
    </>
);
}

