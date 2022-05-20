import Category from "../types/CategoryType";
interface CategoryListType {
  categories: Set<string>;
  allCategories: Array<string>;
}
const CategoryList = ({
  categories,
  allCategories,
}: CategoryListType) => {
  let listOfCategories = [];
  let iterator = categories.values();
  for (let i = 0; i < categories.size; i++) {
    listOfCategories.push(iterator.next().value);
  }
  if (listOfCategories.length > 0) {
    return (
      <>
        <h2>Categories</h2>
        <ol>
          {listOfCategories.map((element: string) => (
            <Category
              key={element}
              category={element}
              unfiltered={allCategories}
            />
          ))}
        </ol>
      </>
    );
  }
};

export default CategoryList;