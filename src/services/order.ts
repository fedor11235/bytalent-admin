import orderApi from "@/api/order";

export default {
  async getAllOrders() {
    try {
      const { data } = await orderApi.getAllOrders();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
