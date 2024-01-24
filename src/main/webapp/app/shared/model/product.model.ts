export interface IProduct {
  id?: number;
  productId?: number | null;
  productName?: string | null;
  price?: number | null;
  stockQuantity?: number | null;
  categoryId?: number | null;
}

export const defaultValue: Readonly<IProduct> = {};
