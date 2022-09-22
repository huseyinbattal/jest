const fetchData = (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merhaba");
    }, 3000);
  });
};

module.exports = { fetchData };
