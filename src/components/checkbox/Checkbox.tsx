import "./checkbox.scss";

type PropsType = {
  id: number;
};

const Checkbox = ({ id }: PropsType) => {
  return (
    <div className="checkbox-wrapper-19">
      <input id={`cbtest-${id}`} type="checkbox" />
      <label className="check-box" htmlFor={`cbtest-${id}`}></label>
    </div>
  );
};

export default Checkbox;
