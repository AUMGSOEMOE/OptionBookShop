import { useContext } from "react";
import { api } from "./baseUrl";
import { DataContext } from "../context/DataContext";

export const Auth = async (arg, formData) => {
  try {
    const { data } = await api.get(arg);
    const user = data.find((i) => i.email === formData.email);
    if (!user) {
      throw new Error("user not found");
    }
    const comparePassword = user.password == formData.password;
    if (!comparePassword) {
      throw new Error("password not correct");
    }

    return user;
  } catch (error) {}
};
