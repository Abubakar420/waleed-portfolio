import SocialIcons from "./SocialIcons";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <SocialIcons />

      <a className="footer-link" href="https://wa.me/923114920140">
        <p>
          <span>▷</span> Designed and built by Waleed Abid &copy; {currentYear}
        </p>
      </a>
    </footer>
  );
};

export default Footer;
