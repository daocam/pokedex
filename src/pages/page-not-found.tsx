import { Link } from 'react-router-dom';
  
const PageNotFound = () => {
  
  return (
    <div className="center">
      <img src="./images/melofee-full.png" alt="Page non trouvée"/>
      <h1>Hey, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;