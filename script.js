//your JS code here. If required.
document.getElementById('btn').onclick = function () {
  const input = Number(document.getElementById('ip').value);
  const outputDiv = document.getElementById('output');

  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.textContent = `Result: ${input}`;
      resolve(input);
    }, 2000);
  })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          outputDiv.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          outputDiv.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
};
