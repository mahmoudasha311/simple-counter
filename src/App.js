import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [enableNegative, setEnableNegative] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button
          style={{
            cursor: "pointer",
            fontSize: "20px",
            border: "solid 1px white",
            borderRadius: "5px",
            padding: "12px 24px",
            textAlign: "center",
            margin: "20px",
          }}
          onClick={() => {
            enableNegative
              ? setCounter(() => counter - 1)
              : setCounter(() => (counter <= 0 ? 0 : counter - 1));
          }}
        >
          Decrease
        </button>
        <button
          style={{
            cursor: "pointer",
            fontSize: "20px",
            border: "solid 1px white",
            borderRadius: "5px",
            padding: "12px 24px",
            textAlign: "center",
            margin: "20px",
          }}
          onClick={() => setCounter(() => counter + 1)}
        >
          Increase
        </button>
      </div>

      <h1 style={{ fontSize: "50px", margin: "30px" }}>{counter}</h1>
      <h1>
        {enableNegative
          ? "Negative value is enabled"
          : "Negative value is disabled"}
      </h1>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          name="value"
          id="value"
          type="checkbox"
          style={{
            height: "20px",
            width: "20px",
            marginRight: "10px",
            borderRadius: "10px",
          }}
          checked={enableNegative}
          onChange={() => {
            setEnableNegative(!enableNegative);
          }}
        />
        <label htmlFor="value" style={{ fontSize: "20px" }}>
          Enable negative value
        </label>
      </div>
      <div style={{ marginTop: "20px" }}>
        {!enableNegative && counter < 0 ? (
          <h3
            style={{
              fontWeight: "300",
              color: "#fe7968 ",
              fontSize: "16px",
            }}
          >
            NOTE: You Will lose the current value if you decrease, to continue
            enable negative value!
          </h3>
        ) : (
          <h3> </h3>
        )}
      </div>
    </div>
  );
}

export default App;
