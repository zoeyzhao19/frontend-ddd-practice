import { useUserStore } from '@/shared/store';

export function useCartStore() {
  return useUserStore();
}