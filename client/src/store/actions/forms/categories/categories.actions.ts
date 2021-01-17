// import types + interfaces for payloads
import { ICategory, ICategoryAction, IDeleteCategory, IDeleteCategoryAction } from "../../../interfaces/forms/categories.interfaces";
import { CATEGORY, DELETE_CATEGORY } from "./categories.types";

export const StoreCategoryAction = (data: ICategory): ICategoryAction => {
  return { type: CATEGORY, payload: data };
};
export const DeleteCategoryAction = (data: IDeleteCategory): IDeleteCategoryAction => {
  return { type: DELETE_CATEGORY, payload: data };
};