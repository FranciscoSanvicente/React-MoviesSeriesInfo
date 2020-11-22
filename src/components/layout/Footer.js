import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Desarrollado por:
            <span className="text-warning font-weight-normal">
              Francisco Sanvicente
            </span>
            , Usando <i className="fab fa-react" /> React JS &amp; Redux JS
            integrado con API externa de pilícualas
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
