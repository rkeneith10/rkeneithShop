exports.authHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      authorization: token,
    };
  } else {
    return {};
  }
};
