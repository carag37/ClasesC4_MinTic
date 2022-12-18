import back from "./back";

class crud {

//--------------------------------LEER---------------------------------

    async GET(resource) {

        const token = localStorage.getItem("token");
        let bearer;
        if(token===""){

            bearer = "";
        
        }else {

            bearer=`${token}`

        }

        const data = {
            method: 'GET',
            headers: {
                'Content-type':'application/json',
                'x-auth-token':bearer
            }
        }

        const url = `${back.api.baseURL}${resource}`  //se incluye la URL del back y en resource el item que se va a editar (cursos, alumnos, ...)
        let response = (await (await fetch(url, data)).json())  //usa el fetch para enviar data por la url al back
        return response

    }

//--------------------------------CREAR---------------------------------

    async POST(resource, body) {

        const token = localStorage.getItem("token");
        let bearer;
        if(token===""){

            bearer = "";
        
        }else {

            bearer=`${token}`

        }

        const data = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type':'application/json',
                'x-auth-token':bearer
            }
        }

        const url = `${back.api.baseURL}${resource}`  //se incluye la URL del back y en resource el item que se va a editar (cursos, alumnos, ...)
        let response = (await (await fetch(url, data)).json())  //usa el fetch para enviar data por la url al back
        return response
    }

//--------------------------------EDITAR---------------------------------

    //async PATCH(resource, body){
    async PUT(resource, body) {
        const token = localStorage.getItem("token");
        let bearer;
        if(token ===""){
            bearer = "";
        } else {
            bearer = `${token}`;
        }
        
        
        const data = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type':'application/json',
                'x-auth-token': bearer
            }
        }
        const url = `${back.api.baseURL}${resource}`
        let response = (await (await fetch(url, data)).json())
        return response

    }

//--------------------------------ELIMINAR---------------------------------

    async DELETE(resource, body) {

        const token = localStorage.getItem("token");
        let bearer;
        if(token===""){

            bearer = "";
        
        }else {

            bearer=`${token}`

        }

        const data = {
            method: 'DELETE',
            body: JSON.stringify(body),
            headers: {
                'Content-type':'application/json',
                'x-auth-token':bearer
            }
        }

        const url = `${back.api.baseURL}${resource}`  //se incluye la URL del back y en resource el item que se va a editar (cursos, alumnos, ...)
        let response = (await (await fetch(url, data)).json())  //usa el fetch para enviar data por la url al back
        return response

    }



}

export default new crud();