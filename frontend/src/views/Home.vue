<template>
  <div class="home">
    <div class="home-logo">
      <img src="../assets/logo.jpg" alt="Logo Titan">
    </div>

    <div class="home-description">
      <p>Inscrivez-vous pour faire partie des premiers touristes de Titan, la fameuse lune de Saturne !</p>
    </div>

    <div class="home-form">
      <form>
        <div class="firstGroup " :class="{error: validation.hasError('user_lastName')}">
          <label for="firstName" class="position">Prénom <span class="red">*</span></label><br>
          <input type="text" id="firstName" name="user_firstName" v-model="user_firstName">
          <div class="message">{{ validation.firstError('user_firstName') }}</div>
        </div>
        <div class="firstGroup" :class="{error: validation.hasError('user_lastName')}">
          <label for="lastName" class="position">Nom <span class="red">*</span></label><br>
          <input type="text" id="lastName" name="user_lastName" v-model="user_lastName">
          <div class="message">{{ validation.firstError('user_lastName') }}</div>
        </div>
        
        <div class="firstGroup" :class="{error: validation.hasError('user_mail')}">
          <label for="mail" class="position">Email <span class="red">*</span></label><br>
          <input type="email" id="mail" name="user_mail" v-model="user_mail">
          <div class="message">{{ validation.firstError('user_mail') }}</div>
        </div>
        <div class="secondGroup">
          <input type="checkbox" id="inscription" name="user_choice"  v-model="user_choice">
          <label for="inscription">J'accepte de m'inscrire à la newsletter de Titan</label>
        </div>
        <div class="button">
          <button type="submit" @click="submitData">Valider mon inscription</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

export default {
  name: 'Home',
  data ()  {
    return{
      user_mail : "",
      user_firstName: "",
      user_lastName: "",
      user_choice: "",
    }  
  },
  validators : {
    user_mail: function(value) {
        return Validator.value(value).required().email('Email invalide');
    },
    user_lastName: function(value){
        return Validator.value(value).required().regex("^[a-zA-Z-éàè]+$" , 'Les chiffres et caractères spéciaux ne sont pas autorisés');
    },
    user_firstName: function(value){
        return Validator.value(value).required().regex("^[a-zA-Z-éàè]+$" , 'Les chiffres et caractères spéciaux ne sont pas autorisés');
    },
    
  },
  methods : {
    submitData : function (e){
      e.preventDefault();
      
      var user_firstName = this.user_firstName;
      var user_lastName = this.user_lastName;
      var user_choice = this.user_choice;
      var user_mail = this.user_mail

      // On vérifie les champs définit dans validator
      this.$validate()
      .then(function (success){
          if(success){
              let url = process.env.VUE_APP_ADRESS_BACKEND;
              axios.post(url,{
                  user_firstName: user_firstName,
                  user_lastName: user_lastName,
                  user_mail: user_mail,
                  user_choice: user_choice
                },{
                  headers : {
                    'Content-Type': 'text/plain',
                    
                  }
              }) 
              .then(response => {
                console.log(response);
                document.location.reload();
              })
              .catch(e => {
                console.log(e);
              })
          }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .red{
    color: red;
  }

  .home{
    margin: 0;
    padding:0;
    &-logo{
      width: 100%;
      text-align: center;
      margin-top: 40px;
      img{
        width: 389px;
        height: 178px;
      }
    }
    &-description{
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 60px;
      width: 40%;
      p{
        font-size: 22px;
        font-weight: 400;
        line-height: 25,78px;
        text-align: center;
      }
    }
    &-form{
      display: flex;
      justify-content: center;
      text-align: center;
      width: 100%;
      
      .message{
        width: 100%;
        margin:0 auto;
        margin-top: 20px;
        color: red;
      }
      .firstGroup{
        width: 100%;
        margin: auto;
        margin-bottom: 30px;
        line-height: 8px;
        label{
          font-weight: bold;
          display: block;
          width: 280px;
          margin: 0 auto;
          text-align: left;
        }
        input{
        width: 270px;
        height: 40px;
        }
      }
      .secondGroup{
        input{
          display: inline-block;
          margin-right: 20px;
        }
      }
      label{
        font-size: 16px;
        
      }
      .button{
        margin-top: 40px; 
        display: flex;
        justify-content: center;
        button{
          background-color: #db6708;
          color: white;
          width: 350px;
          height: 40px;
          border: none;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          &:hover{
            background-color: #df8943;
          }
        }
      }
    }
  }

  @media screen and (min-width: 300px) and (max-width: 599px){
    .home{
      padding-bottom: 50px;    
      &-logo{
        img{
          width: 290px;
          height: 148px;
        }
      }
      &-description{
        width: 90%;
      }
      &-form{
        .secondGroup{
          width: 90%;
          margin-right: 0px;
        }
        .button{
          button{
            width: 320px;
          }
        }
      }
    }
  }

  

  
  
</style>  