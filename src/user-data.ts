/**
 * Interface User
 */
interface User {
  username: string;
  avatarUrl: string;
}
/**
 * Set user data to local storage
 */
export const setUserData = (
  user: User = { username: "Wade Warren", avatarUrl: "img/avatar.png" }
): void => {
  window.localStorage.setItem("user", JSON.stringify(user));
};
/**
 *
 * @param object Any object
 * @returns object has been User
 */
const instanceofUser = (object: any): object is User => {
  return "username" in object && "avatarUrl" in object;
};

/**
 * Get user data from local storage
 * @returns user instance of class User
 */
export const getUserData = (): User | Error => {
  const user: unknown = JSON.parse(window.localStorage.getItem("user"));

  if (instanceofUser(user)) return user;
  else {
    throw new Error("User not exist in local storage");
  }
};

/**
 * Get favorites amount from local storage
 * @returns favorites amount
 */
export const getFavoritesAmount = (): number => {
  const favoritesAmount: unknown =
    +window.localStorage.getItem("favoritesAmount");

  return typeof favoritesAmount == "number" && !isNaN(favoritesAmount)
    ? favoritesAmount
    : 0;
};
