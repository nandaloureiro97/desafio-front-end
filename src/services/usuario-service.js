import api from "./api";

function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/users')
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    })
}


function deletar(id,indice){
    return new Promise((resolve, reject) => {
        return api.delete(`/users/${id}`)
        .then(response => {
            resolve(response.data)
            this.usuarios.splice(indice, 1);
            console.log(this.usuarios);
        })
        .catch(error => reject(error));
    });
}

export default {
    obterTodos,
    deletar
}