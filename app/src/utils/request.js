import uniqid from "uniqid";

export const fetchFromHttp = ({
  url,
  method = "POST",
  methodAlias,
  params = [],
  body,
  timeOut = 10000,
  ...rest
}) => {
  const id = uniqid();
  const message = body
    ? JSON.stringify(body)
    : JSON.stringify({ id, jsonrpc: "2.0", method: methodAlias, params });
  const request = () =>
    fetch(url, {
      method: method,
      headers: {
        Authorization: `Basic YXV0aDpiaXRjb2luLWIyZGQwNzc=`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      ...(method.toUpperCase() === "GET" ? {} : { body: message }),
      ...rest
    })
      .then(async res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          const result = await res.json();
          return Promise.reject({
            status: res.status,
            message: result
          });
        }
      })
      .catch(err => {
        return Promise.reject(err.message || err);
      });
  if (timeOut) {
    return Promise.race([
      request(),
      new Promise((resovle, reject) => {
        setTimeout(() => {
          reject("请求超时");
        }, timeOut);
      })
    ]);
  } else {
    return request();
  }
};
