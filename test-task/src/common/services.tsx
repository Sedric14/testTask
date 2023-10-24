const baseUrl = 'http://146.190.118.121/api/table';

const logUser = async () => {
  const resp = await fetch(baseUrl, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
  // const resp = fetch('http://146.190.118.121/api/table')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // const result = await resp.json();
  return resp;
};

export default logUser;
