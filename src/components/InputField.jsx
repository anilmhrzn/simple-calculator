/* eslint-disable react/prop-types */
const InputField = ({userinput}) => {

  return (
    <>
      {" "}
      <input
        type="text"
        className="calculator-screen z-depth-1"
        value={`${userinput}`}
        disabled
        placeholder="0"
      />
    </>
  );
};
export default InputField;
