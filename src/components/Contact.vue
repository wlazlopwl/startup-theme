<template>
<div id="contact">
  
  <v-container  grid-list-md >

   
    <v-layout row wrap >
      
      
      <v-flex xs12 sm6 md6 lg6 xl4 class="dane hidden-xs-only" >
            
        <p><v-icon class="icon" large color="blue" >import_contacts</v-icon><span>COMPANY DETAILS</span><p class="line"></p></p>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        
  <v-list  three-line>
    
    <v-list-tile  v-for="icon in icons" :key="icon.icon">
      
      <v-icon large>{{icon.icon}}</v-icon>
      
      <v-list-tile-action>{{icon.title}}</v-list-tile-action>
      
      
    </v-list-tile>
    
      
      
  

  </v-list>         

      </v-flex>
      
      
      
      <v-flex   xs12 sm6 md6 lg6 xl4 class="dane">
          <v-card elevation="15" class="contact_form">
        <v-form v-model="valid">
           <p><v-icon class="icon" large color="blue">message</v-icon><span>CONTACT</span><p class="line"></p></p>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          
          <v-text-field  v-model="name"
           :rules="nameRules"
           required
          
           clearable outline
           label="Name"
           color="blue"
       
          ></v-text-field >

          <v-text-field v-model="email"
          :rules="emailRules"
          clearable outline
           label="Email"
           color="blue"
           
          ></v-text-field >
          
           <v-text-field  outline clearable 
           label="Phone number"
           color="blue"
           

           
           
          ></v-text-field> 
          <v-form class="f">
        
        <v-textarea auto-grow clearable outline
          color="blue"
          
        
          label="Your question"
          rows="5" >
        </v-textarea> 
            </v-form>   
       
      <div class="text-xs-center btn">
      <v-btn class="btn_send" outline >Send message</v-btn>
        </div>
        
        </v-form>
        </v-card>
      </v-flex>      
    </v-layout>
    </v-container>
  
 
  </div>
 
  </template>

<script>

export default {
  
  
data: function (){
    return {

      icons:[
        {icon:'mail', title:'lorem@ipsum.com'},
        {icon:'my_location', title:'00-000 Ipsum '},
        {icon:'phone', title:'123 456 789'}
      ],

       
     
    
}
}
}


 
</script>

<style scoped>

div{
    margin: 0 auto; 
    padding-top:10px;
    background-color: white;
}

p, span{
    font-size: 30px;
    text-align: center;
}

.form{
border-radius: 100px;
}

.icon{
  padding-right: 25px;
}

.dane span{
  
  
  font-weight: 600;
    letter-spacing: 3px;


 
}

.dane p{
  margin: 0 auto;
  
  
}

.dane{
  background-color: 
}

.icons{
  position: relative;
  left:30px;
}

.btn_send:hover{
    color: #03A9F4;
    
}

.form{
  background-color: #03A9F4;
}

.btn{
  padding-bottom: 20px;
}

.line{
     border-bottom: 2px solid #03A9F4;
  width: 35px;
  margin: 0 auto;
  
  
     
}

.contact_form{
  padding-left: 20px;
  padding-right: 20px;
}

.contact_top{
  background-color:  #0288D1;
  height: 100px;
  margin-bottom: 15px;
}

</style>