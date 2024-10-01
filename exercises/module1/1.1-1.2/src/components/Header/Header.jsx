import logo from "./LOGO HE VINCI.png";

const Header = (props) => {
  return (
    <div>
      <img src={logo} alt="Logo Vinci" />
      <h1>{props.titre}</h1>);
    </div>
  );
};

export default Header;
