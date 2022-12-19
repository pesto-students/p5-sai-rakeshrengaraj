import styles from "./urlInput.module.css"
import { useState } from "react";


const UrlInputValue = ({getInputValue}) => {
  const [inputValue, setInputValue] = useState("");

  // To get and set input value from text field on Change
  const onChangeHandler = (e) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  // Passed the set input value to url shortener
  const onClickHandler = (e) => {
    e.preventDefault();
    getInputValue(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.urlInput}>
      <input
        type="text"
        placeholder="Enter URL"
        onChange={onChangeHandler}
        value={inputValue}
      />
      <button className={styles.submitUrl} onClick={onClickHandler}>
        Submit
      </button>
    </div>
  );
};

export default UrlInputValue;
