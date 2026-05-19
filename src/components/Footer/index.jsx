// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-decoration">
        <img src="assets/gif/banda.png" alt="banda" className="banda" style={{ width: "160px" }} />
      </div>
      <div className="display-footer">
        {/* <div className="display-contact">
          <div className="contact">
            Você possui alguma dúvida?
            <br />
            Entre em contato com o Papai ou a Mamãe.
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5585984324350&text=Olá vim pelo site de convite de aniversário do Lucca Matteo, gostaria de tirar uma dúvida."
            target="_blank"
          >
            <WhatsAppIcon fontSize="large" sx={{ color: "#25D366" }} />
          </a>
        </div> */}
        <div className="copyright">
          <p>
            &copy; {year} Negócio Sublime.{" "}
            <span> Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
