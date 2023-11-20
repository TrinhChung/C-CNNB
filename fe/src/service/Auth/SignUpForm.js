import axios from "axios";

export const singUpForm = async (bodyForm, url) => {
  try {
    const res = await axios({
      method: "post",
      url: url,
      data: bodyForm,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
