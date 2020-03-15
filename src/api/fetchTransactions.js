export const fetchTransactions = () => {

  fetch('http://dev-test.torca.io/transactions', {
    method: "get"
  })
    .then(response => response.json())
};

