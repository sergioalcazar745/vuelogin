import Global from "@/Global";
import axios from "axios";

export default class LoginService{

    login(user){

        return new Promise(function(resolve){

            var request = Global.url + "auth/login";
            axios.post(request, user).then(response => {
                resolve(response.data.response);
            });

        });

    }

}