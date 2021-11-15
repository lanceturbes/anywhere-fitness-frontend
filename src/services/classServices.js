import axios from "axios";
import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const articleService = async ()=> {
   const resp = await axiosWithAuth()
      .get("/class")
         return resp.data
           
    }

export default articleService;