import api from "./basic";

const getList = (params = {}) => {
  return api.get("/api/script", params);
};

export default { getList };
