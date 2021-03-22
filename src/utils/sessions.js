export const saveUserSession = (name) => localStorage.setItem("user", name);

export const isValidSession = () => !!localStorage.getItem("user");

export const logOutSession = () => localStorage.removeItem("user");
