<template>
  <section class="usuarios">
    <div class="topo">
      <div>
        <h1>#1</h1>
      </div>
      <div>
        <a @click="verListaUsuarios" class="voltar">Voltar</a>
      </div>
    </div>

    <div class="ver-usuario">
        <div><img src="../assets/user1-120.png" /></div>
        <div>
          <p class="txt">Primeiro nome</p>
          <p class="nome">George</p>
        </div>
        <div>
          <p class="txt">Último nome</p>
          <p class="nome">Bluth</p>
        </div>
    </div>

    <div class="infos-usuario">
      <div class="infos">
        <p class="txt">Endereço de e-mail</p>
        <p class="nome">george.bluth@reqres.in</p>
      </div>

      <div class="infos">
        <p class="txt">Link do avatar</p>
        <p class="nome">https://reqres.in/img/faces/2-image.jpg</p>
      </div>

      <div class="infos">
        <p class="txt">Link de suporte</p>
        <p class="nome">https://reqres.in/#support-heading</p>
      </div>

      <div class="infos">
        <p class="txt">Descrição do usuário</p>
        <p class="nome">To keep ReqRes free, contributions towards server costs are appreciated!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    verListaUsuarios() {
      this.$router.push({ name: "home" })
    }
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
    margin: 50px auto;
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
    background: #F7F7F7;
    border-radius: 5px;
    width: 185px;
    height: 55px;
    color: black;
    text-decoration: none;
    padding: 15px 60px;
    font-weight: 600;
    cursor: pointer;
  }

  .topo a:hover {
    background: #3bb7bd;
  }

  .ver-usuario {
    display: flex;
  }

  .txt {
    color: #797979;
  }

  .ver-usuario p {
    text-align: left;
    margin-left: 30px;
  }

  .nome {
    color: black !important;
    font-weight: 600;
  }

  .infos-usuario p {
    margin-block-start: 0em !important;
    margin-block-end: 5px !important;
    text-align: left;
  }

  .infos-usuario {
    margin-top: 40px;
  }

  .infos {
    margin-block: 30px;
  }
</style>
