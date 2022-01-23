import { useUserStore } from '@/shared/store';

export function useGlobalStore() {
  return useUserStore();
}
