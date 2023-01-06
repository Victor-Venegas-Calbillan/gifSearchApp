import { useState } from "react";

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newInpuntValue = inputValue.trim();

    //validaciones pequeñas
    if(newInpuntValue.length <= 1 ) return;
    if(newInpuntValue.includes()) return;

    onNewCategory(newInpuntValue);
    setInputValue('');
  };


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        className="buscar"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
