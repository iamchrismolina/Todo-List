import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__img"
        src="/public/images/todo-img-pngwing.com.png"
      />
      <div className="header__brand">
        <h1 className="header__title">TODO LIST</h1>
        <span className="header__desc">Create your list</span>
      </div>
    </div>
  );
};

export default Header;
