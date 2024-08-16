import useSWR from "swr";
import * as api from "../services/api";

export const useFetch = () => {
  return {
    GetCauses: () =>
    useSWR("allCauses", async () => {
      const response = await api.getCauses();
      return response;
    }),
    GetSponsor: () =>
    useSWR("allSponsor", async () => {
      const response = await api.getSponsor();
      return response;
    }),
      GetBlogs: () =>
      useSWR("allBlogs", async () => {
        const response = await api.getBlogs();
        return response;
      }),
      GetUpdates: () =>
      useSWR("allUpdates", async () => {
        const response = await api.getUpdates();
        return response;
      }),
      GetTeams: () =>
      useSWR("allTeams", async () => {
        const response = await api.getTeams();
        return response;
      }),
      GetTestimonies: () =>
      useSWR("allTestimonies", async () => {
        const response = await api.getTestimonies();
        return response;
      }),
      GetContact: () =>
      useSWR("allContact", async () => {
        const response = await api.getContact();
        return response;
      }),
      GetHomepage: () =>
      useSWR("allHomepage", async () => {
        const response = await api.getHomepage();
        return response;
      }),
      GetCounter: () =>
      useSWR("allCounter", async () => {
        const response = await api.getCounter();
        return response;
      }),
      GetSlider: () =>
      useSWR("allCounter", async () => {
        const response = await api.getSlider();
        return response;
      }),
      GetGallery: () =>
      useSWR("allGallery", async () => {
        const response = await api.getGallery();
        return response;
      }),
      GetAbout: () =>
      useSWR("allGallery", async () => {
        const response = await api.getAbout();
        return response;
      }),
      GetDonate: () =>
      useSWR("allDonate", async () => {
        const response = await api.getDonate();
        return response;
      }),
      GetSuccess: () =>
      useSWR("success", async () => {
        const response = await api.getSuccess();
        return response;
      }),
      GetProjects: () =>
      useSWR("allProjects", async () => {
        const response = await api.getProjects();
        return response;
      }),
      GetProgram: () =>
      useSWR("allProgram", async () => {
        const response = await api.getProgram();
        return response;
      }),
  };
};