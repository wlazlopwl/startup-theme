<template>
<div id="about" class="about">
  <v-container   grid-list-md text-xs-center xs6 sm3 md3 pt-5     >
<div class="desc">
    
    <br><br>
    <v-layout justify-center >
    <v-flex  xs12 sm12 md6  >
      <h2 class="titles">Lorem ipsum dolor </h2>
    
    <p>JSed suscipit nunc at enim ultricies porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec consequat ut massa eget aliquam. Mauris tempus massa nunc, nec posuere ipsum suscipit eu. Curabitur id elit at eros ultricies faucibus. Vivamus vel ante nec ante consectetur aliquam vitae vitae lectus. .</p>
   
    </v-flex>
    <v-flex xs12 sm12 md6>
   <v-img :src="src"> </v-img>
   
   </v-flex>
   </v-layout>
   
</div>

<v-divider></v-divider>
  </v-container>

  </div>



</template>
<script>
  export default {
    data: () => ({

      title: 'WHO WE ARE?',
      src:'https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_960_720.png'
      
    })
  }
</script>
<style scoped>
.about{
  background-color: white;
}
.desc h1{
  padding-top: 30px;
    padding-bottom: 30px;
    /*border-top: 2px solid #03A9F4;*/
    margin: 0 auto;
    font-weight: 600;
    letter-spacing: 3px;
}
.titles{
  font-size: 70px;
 
}



.line{
  border-bottom: 2px solid #03A9F4;
  width: 35px;
  margin: 0 auto;

}



    
</style>