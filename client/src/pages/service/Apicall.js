import axios from "axios";

const commonrequest = async (methods, url, body, header) => {
  const config = {
    method: methods,
    url,
    header: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  //axios instance
  return axios(config)
    .then((data) => {
      return data;
    })
    .then((err) => {
      return err;
    });
};

export default commonrequest;
