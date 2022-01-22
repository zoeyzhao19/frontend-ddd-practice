
import { User } from '@/modules/auth/domain/user'
import { useStore } from '@/modules/auth/store'

interface IUserStoreService {
  user: User | null;
  updateUser(user: User): void;
}

export function useUserStore(): IUserStoreService {
  return useStore()
}