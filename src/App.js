import { useState } from "react";

function App() {
  // counter
  const [counter, setCounter] = useState(0);
  // negative value state
  const [enableNegative, setEnableNegative] = useState(false);
  // increase limit
  const [increaseLimit, setIncreaseLimit] = useState("");
  // decrease limit
  const [decreaseLimit, setDecreaseLimit] = useState("");

  /**
   *
   * @param {*} countingType
   */
  function handleCounter(countingType, countingAmount) {
    try {
      // increase case
      if (countingType === "decrease") {
        // decreasing counter based on negative value enableing,
        // if enabled go below 0 if not, don't go below 0
        setCounter((prevCounter) =>
          enableNegative ? prevCounter - 1 : Math.max(0, prevCounter - 1)
        );
      }
      // increase case
      else if (countingType === "increase") {
        // increasing value
        setCounter((prevCounter) => {
          if (prevCounter === increaseLimit) {
            return prevCounter;
          } else {
            return prevCounter + 1;
          }
          // prevCounter === increaseLimit ? prevCounter : prevCounter + 1;
        });
      }
    } catch (error) {
      console.error("something wrong went happen xd(: ", error);
    }
  }

  return (
    <>
      <Heading
        level={1}
        size={70}
        customStyle={{ gridRow: "1", gridColumn: "-1/1" }}
      >
        Uneccesary counter
      </Heading>
      <Counter>
        <ButtonContainer>
          <Button onHandleCounter={() => handleCounter("decrease")}>
            Decrease
          </Button>
          <Button onHandleCounter={() => handleCounter("increase")}>
            Increase
          </Button>
        </ButtonContainer>

        <Heading level={1} size={50} customStyle={{ margin: "30px" }}>
          {counter}
        </Heading>
        <Heading level={2} size={25}>
          {enableNegative
            ? "Negative value is enabled"
            : "Negative value is disabled"}
        </Heading>
      </Counter>
      <Settings>
        <Heading level={1} size={50}>
          Settings
        </Heading>
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
        <CounterLimit
          increaseLimit={increaseLimit}
          setIncreaseLimit={setIncreaseLimit}
        />
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
      </Settings>
    </>
  );
}

function Counter({ children }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
  };
  return (
    <div style={style} className="counter">
      {children}
    </div>
  );
}

const Settings = ({ children }) => {
  return <div className="settings-container">{children}</div>;
};

/**
 * General button component for setting counter controlling buttons
 *
 * @component
 *
 * @example
 * Usage hint:
 * <Button onHandleCounter={clickHandlerMethod}>Button Content</Button>
 *
 * @param {onHandleCounter} onHandleCounter handling the counting behaviour
 * @param {children} children button content
 * @returns html button
 */

function Button({ onHandleCounter, children }) {
  const buttonStyle = {
    cursor: "pointer",
    fontSize: "20px",
    border: "solid 1px white",
    borderRadius: "5px",
    padding: "12px 24px",
    textAlign: "center",
    margin: "20px",
  };
  return (
    <button style={buttonStyle} onClick={onHandleCounter}>
      {children}
    </button>
  );
}

/**
 * compositional component for containing buttons controlling the counter
 * @component
 *
 * @example
 *  Usage hint:
 * <ButtonContainer style={myStyleObject}>
 *   <Button >Button 1</Button>
 *   <Button >Button 2</Button>
 * </ButtonContainer>
 *
 * @param {children} children the buttonContainer contents
 * @returns contents
 */

function ButtonContainer({ children }) {
  // custom style
  const style = {};
  return <div style={style}>{children}</div>;
}

/**
 * Adjustable headline for standarize the headlines
 *
 * @componene
 *
 * @example
 * Usage hint:
 * <Heading level={1} size={20}></Heading>
 *
 * @param {level} level the level of the HTML Heading element
 * @param {customStyle} customStyle the style fo the element
 * @param {size} size the adjusted size of the default of font size
 * @param {children} children the heading content
 * @returns HTML Heading element
 */
function Heading({ level, size, customStyle, children }) {
  // ensure the value of h between 1 and 6
  if (level < 1) {
    level = 1;
  } else if (level > 6) {
    level = 6;
  }

  // adjuting the font size if provided
  const style = {
    fontSize: `${size || 16}px`,
    ...customStyle,
  };

  // determin the level of the HTML element
  const HeadingTag = `h${level}`;
  return <HeadingTag style={style}>{children}</HeadingTag>;
}

function CounterLimit({
  increaseLimit,
  setIncreaseLimit,
  decreaseLimit,
  setDecreaseLimit,
}) {
  function handleIncreaseLimit(e) {
    setIncreaseLimit(Number(e.target.value));
    console.log(increaseLimit);
  }

  function handleDecreaseLimit(e) {
    setDecreaseLimit(Number(e.target.value));
    console.log(decreaseLimit);
  }
  return (
    <div className="limit">
      <div className="value-limit">
        <label htmlFor="increase">Increase Limit</label>
        <input
          id="increase"
          name="increase"
          type="text"
          value={increaseLimit}
          onChange={handleIncreaseLimit}
        />
      </div>
      <div className="value-limit">
        <label htmlFor="decrease">Increase Limit</label>
        <input
          id="decrease"
          name="decrease"
          type="text"
          value={decreaseLimit}
          onChange={handleDecreaseLimit}
        />
      </div>
    </div>
  );
}
export default App;
