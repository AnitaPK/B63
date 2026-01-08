// http://localhost:7005/api/doc/apply
import axios from "axios";
import axiosInstance from "./axiosInstance";


export const applyDoctor = (data) =>{
    return axiosInstance.post("/doc/apply",data)
}



// http://localhost:7005/api/doc/docStatus/695e116a6781e1e98d759c6d

export const updateStatusDoctor = (docID,data) =>{
    return axiosInstance.patch(`/doc/docStatus/${docID}`,data)
}


export const appliedDodtorList = () =>{
    return axiosInstance.get('/doc/docApplyList')
}