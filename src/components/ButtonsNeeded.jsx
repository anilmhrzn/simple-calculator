/* eslint-disable react/prop-types */
// TODO have to complete the functional part as the design part is done already
const ButtonsNeeded = ({buttons,HandleButton}) => {
  
  return (
    <>
      {buttons.map((items) => (
        <button
          key={items}
          type="button"
          className="operator btn btn-info"
          value={items}
          onClick={(event) => HandleButton(event)}
        >
          {items}
        </button>
      ))}
      {/* <button
        type="button"
        className="all-clear function btn btn-danger btn-sm"
        value="all-clear"
      >
        AC
      </button>

      <button
        type="button"
        className="equal-sign operator btn btn-default"
        value="="
      >
        =
      </button> */}
    </>
  );
};
export default ButtonsNeeded;
