import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={socialImg.id || index} className="icon">
              <a
                href={socialImg.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${socialImg.name || 'social media'} page`}
              >
                <img
                  src={socialImg.imgPath}
                  alt={socialImg.alt || `${socialImg.name || 'Social media'} icon`}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} zamyn Ahmadi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
