const isAuth = (req) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (req.headers.authorization !== "Bearer frederik") reject();
      resolve();
    }, 2000);
  });
};

module.exports = isAuth;
