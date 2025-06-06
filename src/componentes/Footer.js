import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      {/* Banner de contato */}
      <div className="footer-banner">
        {/* Formulário */}
        <form className="footer-form">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Mensagem" rows="4"></textarea>
          <button className="footer-button">Enviar Agora</button>
        </form>

        {/* Informações */}
        <div className="footer-info">
          <h3>Fale Conosco</h3>
          <p><FaPhone className="icon" /> (48) 3222 0098</p>
          <p><FaPhone className="icon" /> (48) 99833 0928</p>
          <p><FaMapMarkerAlt className="icon" /> Rua Marechal Deodoro, 55 - Centro - Florianópolis/SC</p>

          <div className="footer-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="map-container">
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5588501398367!2d-48.55229642447974!3d-27.59537737627067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527382362921ed3%3A0xb7ad946920ba9a6e!2sRua%20Marechal%20Deodoro%2C%2055%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1717663471361!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Rodapé final */}
      <div className="footer-bottom">
        © 2025 - Filler Site. Todos os Direitos Reservados.
      </div>
    </footer>
  );
}

export default Footer;
