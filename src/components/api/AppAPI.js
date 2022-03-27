import React from 'react'
import axios from 'axios';
import Config from './config';

export class AppAPI {
    async  fetchGoangData(){
        var url = Config.REST_URL + 'products/'
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