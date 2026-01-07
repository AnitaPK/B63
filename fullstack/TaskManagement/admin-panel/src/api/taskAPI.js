import axiosInstance from "./axiosInstance"


export const createTask=(data)=>{
    return axiosInstance.post('/task/createTask',data)
} 


export const showAllTasks=()=>{
    return axiosInstance.get('/task/getAllTasks')
}

export const assignTask = (data) => {
  return axiosInstance.post("/assign/assignTask", data);
};

export const getTasksOfUser = (data) => {
  return axiosInstance.get("/assign/getTasksOfUser", data);
};
