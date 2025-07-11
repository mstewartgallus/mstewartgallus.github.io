import { withClass } from "@features/util";
import { editList, editItem } from "./edit.module.css";

export const EditList = withClass('ul', editList);
export const EditItem = withClass('li', editItem);
