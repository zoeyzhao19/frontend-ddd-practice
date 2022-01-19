
export type User = {
  id: string;
  name: string;
  email: string;
  preferences: Ingredient[];
  allergies: Ingredient[]
}

export function hasAllergy(user: User, ingredient: Ingredient): boolean {
  return user.allergies.includes(ingredient);
}

export function hasPreference(user: User, ingredient: Ingredient): boolean {
  return user.preferences.includes(ingredient);
}