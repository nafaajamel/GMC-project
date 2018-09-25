import React from 'react';

const bFooter = () => {
    return (
        <div className="big-footer">

 
     <ul className="footer-list">
         <li className="footer-items">La conecept de Ekrili</li>
         <li className="footer-items">Comment ça marche ?</li>
         <li className="footer-items">e-loue et la sécurité</li>
         <li className="footer-items">L'offre loueur professionnel</li>
         <li className="footer-items">Devenir loueur professionnel</li>
     </ul>
 
   
     <ul className="footer-list">
         <li className="footer-items">En savoir plus</li>
         <li className="footer-items">FAQ</li>
         <li className="footer-items">Contactez-nous</li>
         <li className="footer-items">Mentions légales</li>
         <li className="footer-items">Politique de confidentialité</li>
         <li className="footer-items">Cookies</li>
     </ul>
     <ul className="footer-list">
         <li className="footer-items">contactez nous </li>
         <li className="footer-items">mail  :<span> conact@ekrili.com</span></li>
         <li className="footer-items">phone : <span>78 152 475</span></li>
         <li className="footer-items">fax  :<span>70 544 366</span>  </li>
         
     </ul>
     <ul className="footer-list">
     <li className="footer-items">newsletter</li>
     <li className="footer-items">Obtenir nos meilleurs offres par Email</li>
         
         <li className="footer-items">
        
         <input type="text" placeholder="votre email" className="newsletter"/>
         <button className="newsletter-btn"><i className="fa fa-paper-plane"></i> </button>
         </li>
         
     </ul>
 </div>
     
      );
}
 
export default bFooter;