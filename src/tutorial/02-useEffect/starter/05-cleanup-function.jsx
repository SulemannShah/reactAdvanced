import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Random Components
      </button>
      {toggle && <Random />}
    </>
  );
};

export default CleanupFunction;

const Random = () => {
  useEffect(() => {}, []);

  return (
    <>
      {" "}
      <div>
        <h3>Components</h3>
      </div>
    </>
  );
};
