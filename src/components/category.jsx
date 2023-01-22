import * as React from "react";

const CategoryContext = React.createContext(null);

export const CategoryProvider = ({ children, value }) =>
<CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;

export const useCategory = () => React.useContext(CategoryContext);

export default CategoryProvider;
