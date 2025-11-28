import axios from 'axios'
import axiosInstance from './apiInstance'



// export const getTotPopulation = (method, url,data = null,params = null) =>{
//     return axiosInstance({
//         method:method,
//         url:url
//     })
// }


export const getTotPopulation =()=>{
    return axiosInstance.get('/totalPopulation',)
}

export const topTENPOpContry = ()=>{
    return axiosInstance.get('/topTENPOpContries')
}

export const getUniqueConti = ()=>{
    return axiosInstance.get('/getUniqueCont')
}

export const getDataByConti = (cName)=>{
    console.log(cName)
    return axiosInstance.get(`/getDataByConti?contiName=${cName}`)
}



/**
 * Generic API request handler
 * @param {string} method - HTTP method (get, post, put, delete, patch)
 * @param {string} url - API endpoint
 * @param {object} data - request body (optional)
 * @param {object} params - query params (optional)
 */