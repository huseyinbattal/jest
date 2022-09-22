const fetchData = (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merhaba1");
    }, 3000);
  });
};

module.exports = { fetchData };
