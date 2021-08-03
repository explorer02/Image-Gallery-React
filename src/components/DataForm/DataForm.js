import React, { useCallback, useEffect, useState } from "react";
import "./data-form.css";

const DataForm = ({
  title: initTitle,
  description: initDescription,
  onSubmit,
}) => {
  const [title, setTitle, titleChangeHandler] = useInput(initTitle);
  const [description, setDescription, descriptionChangeHandler] =
    useInput(initDescription);

  //reset form data on clicking new list item
  useEffect(() => {
    setTitle(initTitle);
  }, [initTitle, setTitle]);

  useEffect(() => {
    setDescription(initDescription);
  }, [initDescription, setDescription]);

  //submit form
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form className="data-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        required
        minLength="1"
        value={title}
        onChange={titleChangeHandler}
      />
      <textarea
        placeholder="Description"
        maxLength="40000"
        minLength="10"
        rows="4"
        required
        value={description}
        onChange={descriptionChangeHandler}
      ></textarea>
      <button>Save</button>
    </form>
  );
};

//custom hook for controlling input
const useInput = (initValue) => {
  const [data, setData] = useState(initValue);
  const changeHandler = useCallback((ev) => setData(ev.target.value), []);
  return [data, setData, changeHandler];
};
export default DataForm;
