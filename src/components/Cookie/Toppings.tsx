import { Product, ingredients } from "@/modules/products/domain/product";
import { hasAllergy, hasPreference } from "@/modules/auth/domain/user";
import { useGlobalStore } from "@/shared/services";

type ToppingsProps = {
  cookie: Product;
};

export function Toppings({ cookie }: ToppingsProps) {
  const { user } = useGlobalStore();

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}{" "}
          {!!user && hasPreference(user, topping) && <>👍</>}{" "}
          {!!user && hasAllergy(user, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}