import React from 'react'
import axios from 'axios';
import Config from './config';

export class AppAPI {
    async  fetchGoangData(){
        var url = Config.REST_URL + 'api/products'
        try
        {
            return await axios.get(url)
            .then(res => {
                return res.data;
            });
        } catch (err)
        {
          console.log("Issue fetching data.. possible url invalid character sent: " + err)
          return []
        }
 
     }

     async  fetchNodJSData(){
        console.log("In the fetchNodJSData function!!")
        var url = Config.REST_URL_NODEJS + 'api/products'
        console.log(url)
        try
        {
            return await axios.get(url)
            .then(res => {
                return res.data;
            });
        } catch (err)
        {
          console.log("Issue fetching data.. possible url invalid character sent: " + err)
          return []
        }
 
     }

     async  fetchExpressJSData(){
        console.log("In the fetchExpressJSData function!!")
        var url = Config.REST_URL_EXPRESSJS + 'programming-languages'
        console.log(url)
        try
        {
            return await axios.get(url)
            .then(res => {
                return res.data;
            });
        } catch (err)
        {
          console.log("Issue fetching data.. possible url invalid character sent: " + err)
          return []
        }
 
     }
}

export default AppAPI