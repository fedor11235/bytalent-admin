import projectApi from "@/api/project";

export default {
  async getAllProjects() {
    try {
      const { data } = await projectApi.getAllProjects();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};

