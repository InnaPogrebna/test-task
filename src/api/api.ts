export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const request = async (url: string, option?:{}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, option);

    return await response.json();
  } catch (error) {
    return 'Error';
  }
};
