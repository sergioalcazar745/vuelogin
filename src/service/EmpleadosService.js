import Global from "@/Global";
import axios from "axios";

export default class EmpleadosService{

    getEmpleados(){

        return new Promise(function(resolve){
            var request = Global.url + "api/empleados";
            const header = {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
            axios.get(request, {headers: header}).then(response => {
                resolve(response.data)
            })
        })

    }

}