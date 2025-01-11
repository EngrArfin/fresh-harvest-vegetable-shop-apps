import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api-fresh-harvest.code-commando.com/api/v1/";

// Fetch all services
export const getServices = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/services/api/get-all`);

    console.log("Fetched services:", res.data);

    if (res.status !== 200 || !res.data.services) {
      throw new Error(`Failed to fetch services: ${res.statusText}`);
    }

    return res.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

// Fetch service details by ID
export const getServicesDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/services/api/${id}`);

    console.log("Fetched service details:", res.data);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch service details: ${res.statusText}`);
    }

    return res.data;
  } catch (error) {
    console.error(`Error fetching service details for ID ${id}:`, error);
    return {};
  }
};

// Fetch all products
/* export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products/api/getdata`);

    console.log("Fetched products:", res.data);

    if (res.status !== 200 || !res.data.products) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    return res.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch product details by ID
export const getProductsDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/products/api/${id}`);

    console.log("Fetched product details:", res.data);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch product details: ${res.statusText}`);
    }

    return res.data;
  } catch (error) {
    console.error(`Error fetching product details for ID ${id}:`, error);
    return {};
  }
};
 */
