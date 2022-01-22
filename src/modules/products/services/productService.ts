import { Product } from '../domain/product';
import { getProductList } from '../apis';

export function useProducts() {
  return {
    getList() {
      return getProductList();
    },
  };
}