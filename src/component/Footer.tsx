import React from 'react';
import "../styles/footer.css"
import { Link } from 'react-scroll/modules';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright © 2023 por Alejandro Vargas | Reservados todos los derechos</p>
      </div>

      <div className="footer-iconTop">
      <Link to="home" smooth={true} offset={-100}><i className='bx bxs-chevrons-up' ></i></Link>
      </div>
    </footer>
  );
};

export default Footer;