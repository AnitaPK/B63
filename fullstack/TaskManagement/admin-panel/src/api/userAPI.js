import axiosInstance from "./axiosInstance";

// 🔹 Register User
export const registerUser = (data) => {
  return axiosInstance.post("/user/register", data);
};

// Login user 
export const loginUser = (data) =>{
    return axiosInstance.post("/user/login",data)
}