/**
 * Set user data to local storage
 */
export const setUserData = (user = { username: "Wade Warren", avatarUrl: "img/avatar.png" }) => {
    window.localStorage.setItem("user", JSON.stringify(user));
};
/**
 *
 * @param object Any object
 * @returns object has been User
 */
const instanceofUser = (object) => {
    return "username" in object && "avatarUrl" in object;
};
/**
 * Get user data from local storage
 * @returns user instance of class User
 */
export const getUserData = () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (instanceofUser(user))
        return user;
    else {
        throw new Error("User not exist in local storage");
    }
};
/**
 * Get favorites amount from local storage
 * @returns favorites amount
 */
export const getFavoritesAmount = () => {
    const favoritesAmount = +window.localStorage.getItem("favoritesAmount");
    return typeof favoritesAmount == "number" && !isNaN(favoritesAmount)
        ? favoritesAmount
        : 0;
};
