
import { User } from '@/modules/auth/domain/user'
import { fakeApi } from '@/modules/auth/apis'


export function useAuth() {
  return {
    auth(name: string, email: string): Promise<User> {
      return fakeApi({
        name,
        email,
        id: "sample-user-id",
        allergies: ["cocoa", "cherry"],
        preferences: ["marshmallow", "peanuts"],
      });
    },
  };
}