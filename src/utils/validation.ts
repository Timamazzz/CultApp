export const isCorrectEmail = (text: string) => {
  let emailRegex =
    /\b(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\b/i;
  return emailRegex.test(text);
};
export const isCorrectPassword = (text: string) => {
  let passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;
  return passwordRegex.test(text);
};
