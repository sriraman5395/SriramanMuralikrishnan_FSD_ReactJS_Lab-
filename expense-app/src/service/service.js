import axios from 'axios';

const getDataFromServer = () => {
    return axios.get('http://localhost:3001/items')
    .then(response => response.data)
  };

  const postDataFromServer = (newExpense) => {
    return axios.post('http://localhost:3001/items',newExpense,{
      headers:{
        'Content-Type':'applications/json'
      }

    })
    .then(response => response.data)
  };


  export {getDataFromServer,postDataFromServer}