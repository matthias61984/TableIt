import axios from "axios";

var zKey = require("dotenv").config();

export default {
    getLocation : function(lName , lat , long) {
        return axios.get("https://developers.zomato.com/api/v2.1/locations?query=" + lName.replace(/ /g,"%") +"&lat=" + lat +"&lon=" + long +"")
    },

    getRandomResturaunt : function(eID , lat , long) {
        return axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=1&lat=100&lon=100")
    }
}