import axios from "axios";

const api = axios.create({
  baseURL: "https://african-hearts-api.vercel.app/api/v1",
});


export const getCauses = async () => {
  try {
    const response = await api.get("causes");
    return response.data;
  } catch (error) {
  }
};
export const getBlogs = async () => {
  try {
    const response = await api.get("blogs");
    return response.data;
  } catch (error) {
  }
};
export const getTeams = async () => {
  try {
    const response = await api.get("teams");
    return response.data;
  } catch (error) {
  }
};
export const getTestimonies = async () => {
  try {
    const response = await api.get("testimony");
    return response.data;
  } catch (error) {
  }
};
export const getContact = async () => {
  try {
    const response = await api.get("contactpages");
    return response.data;
  } catch (error) {
  }
};
export const getHomepage = async () => {
  try {
    const response = await api.get("homepages");
    return response.data;
  } catch (error) {
  }
};
export const getCounter = async () => {
  try {
    const response = await api.get("counter");
    return response.data;
  } catch (error) {
  }
};
export const getSlider = async () => {
  try {
    const response = await api.get("slider");
    return response.data;
  } catch (error) {
  }
};
export const getGallery = async () => {
  try {
    const response = await api.get("gallerys");
    return response.data;
  } catch (error) {
  }
};
export const getAbout = async () => {
  try {
    const response = await api.get("about");
    return response.data;
  } catch (error) {
  }
};
export const getDonate = async () => {
  try {
    const response = await api.get("action");
    return response.data;
  } catch (error) {
  }
};
export const getSuccess = async () => {
  try {
    const response = await api.get("success");
    return response.data;
  } catch (error) {
  }
};
export const getProjects = async () => {
  try {
    const response = await api.get("projects");
    return response.data;
  } catch (error) {
  }
};