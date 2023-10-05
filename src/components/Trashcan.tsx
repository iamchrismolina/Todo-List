import "./trashcan.scss";

const Trashcan = () => {
  return (
    <div className="trash-box">
      <div className="trash"></div>
      <div className="trash-top"></div>
      <div className="trash-btm">
        <div className="trash-lines">
          <div className="trash-line"></div>
          <div className="trash-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Trashcan;
