import { AddCategories, GifGrid } from "./components/";
import { useGifSearch } from "./hook/";

export const GifSearchApp = () => {
  const { categories, error, onAddCategory } = useGifSearch()
  return (
    <>
      <h1>Gif Search App</h1>

      <AddCategories
        onNewCategory={ onAddCategory }
      />

      {
        error && <p className="error animate__animated animate__fadeIn">The entered value is repeated, please try again</p>
      }

      {
        categories.map((category) => (
            <GifGrid
              key={category}
              category={category} 
            />
          ))
      }
    </>
  );
};
