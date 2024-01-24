export interface ICategory {
  id?: number;
  categoryId?: number | null;
  categoryName?: string | null;
  description?: string | null;
}

export const defaultValue: Readonly<ICategory> = {};
