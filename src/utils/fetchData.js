import axios from '../axios';
 const fetchData = () =>
    new Promise((resolve, reject) => {
      const response = axios.get('/products');
      resolve(response);
      reject('Error');
    });

    export default fetchData;