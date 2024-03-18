import Buttonsvg from "../assets/svg/ButtonSvg";
function Button({ href, className, onclick, children, px, white }) {
  const classes = `button relative transition-colors inline-flex items-center justify-center h-11 hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || " "} `;
  const renderbutton = () => (
    <button className={classes}>
      <span className="relative z-10">{children}</span>
      {Buttonsvg(white)}
    </button>
  );
  const renderlink = () => (
    <a href={href} className={classes}>
      <span className="relative z-10">{children}</span>
      {Buttonsvg(white)}
    </a>
  );
  return href ? renderlink() : renderbutton();
}

export default Button;
