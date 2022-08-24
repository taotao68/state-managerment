export const changeTheme = (isDarkMode: boolean) => {
  !isDarkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
  return !isDarkMode
};
