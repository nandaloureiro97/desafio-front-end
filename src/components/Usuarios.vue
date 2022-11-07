<template>
  <section class="usuarios">
    <div class="topo">
      <div>
        <h1>Usuários</h1>
      </div>
      <div>
        <a href="#" id="novo" class="novo" v-on:click="mostrarCampos()">Novo usuário</a>
        <a href="#" id="cancelar" class="cancelar" v-on:click="cancelar()">Cancelar</a>
      </div>
    </div>

    <div class="novo-usuario" id="boxNovoUsuario">
      <form action="/action_page.php">
        <label for="fname">Nome do usuário</label><br>

        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">E-mail</label><br>
        <input type="email" id="lemail" name="lemail"><br><br>
        <input type="submit" value="Salvar dados do usuário" class="btnNovoUsuario" @click="cadastrar()">
        <br><br><br>
      </form>
    </div>

    <div class="card-usuarios">
      <!----------- CARD 1 ------------->
      <div class="card" v-for="(pessoa, indice) in usuarios" :key="pessoa.id">
        <div class="img-usuarios">
          
          <img :src="pessoa.avatar" />

          <div class="nome-usuario">
            <p>{{ pessoa.id }}</p>
            <p class="nome">{{ pessoa.first_name }} {{ pessoa.last_name }}</p>
            <p>{{ pessoa.email }}</p>
          </div>
        </div>

        <div class="icones">
          <a href="#"><img src="../assets/edit.png" /></a>
          <a @click="excluirUsuario(pessoa.id, indice)"><img src="../assets/delet.png" /></a>
          <a @click="verUsuarios" class="view"><img src="../assets/view.png" /></a>
        </div>
      </div>
   
    </div>
  </section>
</template>

<script>

import usuarioService from '../services/usuario-service.js';
import Usuario from '../models/Usuario.js';

export default {
  name: 'UsuariosView',
  data () {
    return {
      usuarios: []
    }
  },

  methods: {

    verUsuarios() {
      this.$router.push({ name: "about" })
    },

    mostrarCampos() {
      document.getElementById("boxNovoUsuario").style.display = "block";
      document.getElementById("cancelar").style.display = "initial";
      document.getElementById("novo").style.display = "none";
    },

    cancelar() {
      document.getElementById("boxNovoUsuario").style.display = "none";
      document.getElementById("novo").style.display = "initial";
      document.getElementById("cancelar").style.display = "none";
    },

    obterTodosOsUsuarios() {
      usuarioService.obterTodos()
      .then(response => {
        this.usuarios = response.data.map(p => new Usuario(p));
      })
      .catch(error => {
        console.log(error);
      })
    },

    excluirUsuario(usuario, indice) {
      if(confirm("Deseja excluir o produto?")) {
        usuarioService.deletar(usuario.id, indice) 
        .then(() => {
          //let indice = this.usuarios.findIndex(usuario.id);

          this.usuarios.splice(indice, 1);
        })

        .catch(error => {
          console.log(error);
        })
      }
    }
    
  }, 

  mounted() {
    this.obterTodosOsUsuarios();
  }
  
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
  }
  .usuarios {
    max-width: 600px;
    margin: 0 auto;
  }

  .topo {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .topo h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 40px;
  }

  .topo a {
    background: #000000;
    border-radius: 5px;
    width: 185px;
    height: 55px;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    font-weight: 600;
  }

  .topo a:hover, .btnNovoUsuario:hover, .cancelar:hover {
    background: #3bb7bd !important;
  }

  .icones img {
    margin-right: 10px;
    cursor: pointer;
  }

  .card-usuarios {
    background-color: #F7F7F7;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 30px;
    border-bottom: 15px solid white;
  }

  .img-usuarios {
    align-items: center;
    display: flex;
  }

  .img-usuarios img {
    border-radius: 5px;
    width: 100px;
  }

  .nome-usuario p {
    color: #797979;
    margin-block-start: 0em !important;
    margin-block-end: 5px !important;
    text-align: left;
  }

   .nome-usuario {
    margin-left: 30px;
   }

   .nome {
    color: black !important;
    font-weight: 600;
   }

   .view {
    cursor: pointer;
   }

   .novo-usuario {
      text-align: left;
   }

   label {
    color: black;
    font-weight: 600;
   }

   input {
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    padding: 2px 15px !important;
  }

  .btnNovoUsuario {
    background: #000000;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    font-weight: 600;
    width: 100%;
    height: 50px;
    cursor: pointer;
  }

  .novo-usuario {
    display: none;
  }

  .cancelar {
    background: #F7F7F7 !important;
    border-radius: 5px;
    color: black !important;
    text-decoration: none;
    padding: 15px 40px;
    font-weight: 600;
    cursor: pointer;
  }

  #cancelar {
    display: none;
  }

</style>
