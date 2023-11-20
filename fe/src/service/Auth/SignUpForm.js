import axios from "axios";

export const singUpForm = async (bodyForm, url) => {
  try {
    const res = await axios({
      method: "post",
      url: url,
      data: bodyForm,
      timeout: 1000 * 20,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return { success: 0, error: error.message };
  }
};
