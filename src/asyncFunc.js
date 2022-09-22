const fetchData = (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merhaba");
    }, 100);
  });
};

module.exports = { fetchData };
