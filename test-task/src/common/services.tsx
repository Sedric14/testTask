const baseUrl = 'http://146.190.118.121/api/';

const logUser = async () => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = (await response.json()) as string;
  return result;
};

export default logUser;
