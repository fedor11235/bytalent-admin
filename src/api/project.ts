import api from ".";

export default {
  getAllProjects() {
    return api.get("/project/all");
  },
};
