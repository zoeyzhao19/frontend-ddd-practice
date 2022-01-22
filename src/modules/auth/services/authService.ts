
import { User } from '@/modules/auth/domain/user'
import { fakeApi } from '@/modules/auth/apis'

interface IAuthenticationService {
  auth(name: string, email: string): Promise<User>;
}

export function useAuth(): IAuthenticationService {
  return {
    auth(name: string, email: string) {
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