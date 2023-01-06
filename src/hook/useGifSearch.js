import { useState } from "react";

export const useGifSearch = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)){
        setError(true);
      return;
    }

    setCategories([newCategory,...categories]);
    setError(false);
  };

  return{
    categories,
    error,
    onAddCategory,
  }
}
