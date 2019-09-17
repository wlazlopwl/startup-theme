<template>
<div class="div">
  <v-container   grid-list-md text-xs-center xs12 sm6 md6 >
<div class="desc">
    <h1>{{title}}</h1>
    <p class="line"></p>
    <br><br>
    <v-layout justify-center align-content-center row wrap>
    

    <v-flex  xs12 sm12 md6 lg6 xl4  >
        <v-card>
      <v-list three-line v-for="item in list1" :key="item.title">


<v-list-tile>
    
    <v-list-tile-avatar><v-icon color="blue" large>{{icon}}</v-icon></v-list-tile-avatar>

      <v-list-tile-content>
                 <v-list-tile-title class="list_title">{{item.title}}</v-list-tile-title>
    
    <v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
              </v-list-tile-content>
   
    
    
    
</v-list-tile>

      </v-list>
      </v-card>
      </v-flex>
    <v-flex xs12 sm12 md6 lg6 xl4>
       <v-card >
      <v-list three-line v-for="item in list2" :key="item.title">


<v-list-tile>
    
    <v-list-tile-avatar><v-icon color="blue" large>{{icon}}</v-icon></v-list-tile-avatar>

      <v-list-tile-content>
                 <v-list-tile-title class="list_title" >{{item.title}}</v-list-tile-title>
    
    <v-list-tile-sub-title>{{item.description}}</v-list-tile-sub-title>
              </v-list-tile-content>
              
   
    
    
    
</v-list-tile>

      </v-list>
    </v-card>
    
   
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
      icon:'beenhere',
      title: 'OUR RULES',
      d:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus pretium nisl, quis dignissim sapien pellentesque et. In hendrerit sit amet tortor eget fringilla',
      list1:[
          {title:'Lorem ipsum dolor',description:'consectetur adipiscing elit. Fusce feugiat ipsum at turpis tincidunt, a suscipit neque dignissim.!'},
          {title:' Orci varius natoque',description:'lacus sit amet pharetra tempor. Nulla quis convallis erat.!'},
          {title:'Vestibulum',description:'Cras sed sodales erat, sagittis varius augue. Etiam ut arcu non metus mollis congue non nec nisi.!'},
          {title:'Maecena',description:'Maecenas hendrerit finibus risus, vitae elementum ex dapibus a'},
      ],
      list2:[
          {title:'Nulla egestas dui urna',description:' Obcaecati, veniam necessitatibus repudiandae odio quas provident ducimus qui'},
          {title:'interdum congue arcu ',description:'Phasellus varius scelerisque leo, id egestas urna posuere non.!'},
          {title:'In tristique malesuada blandit',description:'Vestibulum condimentum mauris a felis scelerisque lacinia. Pellentesque sollicitudin id augue quis cursus.!  '},
          {title:'Nulla facilisi',description:'Nam posuere semper felis, volutpat pharetra arcu vulputate!'},
      ]
     

      
    })
  }
</script>
<style scoped>
.div{
  background-color: #0288D1;
  color:white;
  padding-bottom:40px;
}
.desc h1{
  padding-top: 30px;
    padding-bottom: 30px;
    /*border-top: 2px solid #03A9F4;*/
    margin: 0 auto;
    font-weight: 600;
    letter-spacing: 3px;
}

.other span{
      border-top: 2px solid #03A9F4;
}

.line{
  border-bottom: 2px solid white;;
  width: 35px;
  margin: 0 auto;

}

.list_title{
    font-size: 25px;
    padding-bottom: 30px;
}


    
</style>