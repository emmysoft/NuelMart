const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getProducts = async () => {
    console.log(API_URL);
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    console.log(data);
    return data;
}