import { useState } from "react";
import configuration from "../config/configuration.js"
import { useEffect } from "react";

const useMultiple = (extra = "",depan="") =>{

    let [data , setData] = useState([])
    let [load,setLoad] = useState(true)

    useEffect(() => {
        fetch(configuration.main + extra , {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                // Authorization: 'Bearer b4844965f36533bdaa743f9f5bb77237'
                Authorization: `Bearer ${configuration.access_token}`
            }
        })
        .then(response => {

            if(!response.ok){
                throw new error("check data")
            }
            return response.json()
        })
        .then(element => {
            setData(element)
            setLoad(false)
        })
        .catch(error => error.message)
    },[depan])

    return {data,load}
}
export default useMultiple;