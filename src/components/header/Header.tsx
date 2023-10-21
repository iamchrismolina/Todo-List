import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src="public/images/brand_logo/todo-img-pngwing.com.png"
      />
      <div className="header__brand">
        <h1 className="header__title">TaskGenius</h1>
        <span className="header__desc">Create your task</span>
      </div>
    </header>
  );
};

export default Header;
