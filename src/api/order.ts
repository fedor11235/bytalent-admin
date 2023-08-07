import api from ".";

export default {
  getAllOrders() {
    return api.get("/order");
  },
};
