import axiosInstance from "./axiosInstance"


export const createTask=(data)=>{
    return axiosInstance.post('/task/createTask',data)
} 


export const showAllTasks=()=>{
    return axiosInstance.get('/task/getAllTasks')
}