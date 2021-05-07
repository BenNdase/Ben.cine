import "./Footer.scss";

const Footer = () => {
    return(
        <div className="footer text-center">
            <div className="navbar-brand footer-logo">
              <span>Ben</span>
              <span>Ciné</span>
            </div>
            <div className="footer-contact">
                <div className="footer-title">
                    <h3><hr/>Rejoignez nous<hr/></h3>
                </div>
                <div>
                    <span class="iconify" data-icon="entypo-social:facebook-with-circle" data-inline="false"></span>
                </div>
            </div>
        </div>
    )
}
export default Footer;