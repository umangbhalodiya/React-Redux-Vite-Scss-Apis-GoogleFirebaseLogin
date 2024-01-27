export const authHeader = () => {
  let sessionObj = getSession();
  if (sessionObj && sessionObj.access_token) {
    return {
      Authorization: "Bearer " + sessionObj.access_token,
      "x-api-key": sessionObj?.userInfo?.apiKey,
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
      "x-api-key": sessionObj?.userInfo?.apiKey,
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

export const adminHeader = () => {
  let sessionObj = getCurrUser();

  return {
    "x-api-key": sessionObj?.userInfo?.apiKey,
    "Content-Security-Policy": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "ngrok-skip-browser-warning": true,
  };
};

export const chatAuth = () => {
  let sessionObj = getSession();
  return {
    "x-api-key": sessionObj?.userInfo?.apiKey,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "ngrok-skip-browser-warning": true,
    "x-auth-token": sessionObj.access_token,
  };
};

export const authHeaderForm = () => {
  let sessionObj = getSession();
  if (sessionObj && sessionObj.access_token) {
    return {
      "x-api-key": sessionObj?.userInfo?.apiKey,
      Authorization: "Bearer " + sessionObj.access_token,
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
      "x-api-key": sessionObj?.userInfo?.apiKey,
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

export const setSession = (sessionObj, rememberMe) => {
  if (sessionObj.userInfo && sessionObj.access_token) {
    // Cookies.set("authUser", JSON.stringify(sessionObj), { expires: 1 });
    localStorage.setItem("authUser", JSON.stringify(sessionObj));
  }
};

export const getSession = () => {
  // const cookieVal = Cookies.get("authUser") || null;
  return JSON.parse(localStorage.getItem("authUser"));
};
export const getCurrUser = () => {
  return JSON.parse(localStorage.getItem("currUser"));
};

const getLanguage = () => {
  let language = localStorage.getItem("i18nextLng");
  return language;
};

export const logout = () => {
  sessionStorage.clear();
  localStorage.removeItem("authUser");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
  localStorage.removeItem("data");
  sessionStorage.clear();
  sessionStorage.removeItem("persist:root");
};
