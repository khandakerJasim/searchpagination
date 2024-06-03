import { BASE_URL } from "./Helper";
import commonrequest from "./Apicall";

export const postdatafunc = async (data, header) => {
  return await commonrequest("POST", `${BASE_URL}/api/post1`, data, header);
};
