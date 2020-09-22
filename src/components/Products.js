import React from 'react';

const URL = 'http://localhost:3000/products';
class Products extends React.Component {
  fetchData = fetch(URL).then((response) => {
    if (response.status === 200) {
      return response.json;
    }
    Promise.reject(new console.error('error'));
  });
}

Products.fetchData(URL)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
