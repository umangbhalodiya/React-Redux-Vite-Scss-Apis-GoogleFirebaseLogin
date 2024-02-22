// Usage: This file is used to manage the user session and authentication related functions.
export const authHeader = () => {
  let sessionObj = getSession();
  if (sessionObj) {
    return {
      Authorization: "Bearer " + "Your Token",
      "Content-Security-Policy": "*",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
      "ngrok-skip-browser-warning": true,
    };
  } else {
    return {
      "Content-Security-Policy": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "ngrok-skip-browser-warning": true,
    };
  }
};

export const authHeaderForm = () => {
  let sessionObj = getSession();
  if (sessionObj) {
    return {
      Authorization: "Bearer " + "Your Token",
      "Content-Security-Policy": "default-src 'self',frame-src 'self'",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "multipart/form-data",
      "X-Frame-Options": "SAMEORIGIN",
      "ngrok-skip-browser-warning": "true",
    };
  } else {
    return {
      "Content-Security-Policy": "default-src 'self',frame-src 'self'",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "multipart/form-data",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "ngrok-skip-browser-warning": "true",
    };
  }
};

export const getSession = () => {
  // get user details from local storage
  return JSON.parse(localStorage.getItem("authUser"));
};
