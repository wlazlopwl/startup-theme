<template>
<div id="feature" class="feature">
<v-container  grid-list-md text-xs-center xs6 sm3 md3 >
<div class="desc">
    <h1>WHAT WE DO?</h1>
    <p class="line"></p>
   
</div>

<v-layout align-content-center row wrap>
        <v-flex  xs12 sm12 md4 lg4 xl4 v-for="item in items" :key="item.title">
            <v-card elevation="0" flat class="text-xs-center ma-4 card">
                <v-card-media>
                    <v-img max-height=300 ><img :src="item.src" /></v-img>
                </v-card-media>
                <v-responsive class="pt-3">
                    
                    
                        
                    
               
                </v-responsive>
                
                <v-card-text>
               
                        <div class="title">
                      <p>  {{item.title}} </p>
                            
                        </div>
                        <div class="desc">{{item.desc}}</div>

                </v-card-text>
                </v-card>
            </v-flex>
    </v-layout> 
<v-divider></v-divider>
  </v-container>
</div>
</template>

<script>

export default {
    data: function() {
        return{
           items :[
                {title: 'Lorem ipsum ',
                 desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sagittis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sagittis lacus.',
                 src:'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg'},

                {title: 'Maecenas hendrerit',
                 desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sagittis lacus. Suspendisse arcu diam, ultrices vel elit a, feugiat fringilla lorem. Quisque et imperdiet felis.',
                 src:'https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'},

                {title: 'Sed ac libero',
                 desc:'Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed sagittis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. consectetur adipiscing elit. Nulla sed sagittis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                 src:'https://cdn.pixabay.com/photo/2017/10/05/08/20/technology-2818664_960_720.jpg'}
                
                
            ]
            

        }
    }
}

</script>

<style scoped>
.desc h1{
    padding-bottom: 30px;
    
    
    
 font-weight: 600;
    letter-spacing: 3px;

    
 
}

.title p{

    padding-bottom: 60px;
    font-size: 30px;
    
}


.other span{
      border-top: 2px solid #03A9F4;
 

    
 width: 35px;
}

/*.card:hover{
    background-color:#0288D1;
    color: white;
    
}*/

.feature{
    padding-top: 50px;
    background-color: white;
}
.card{
    border-radius: 20px;
}

.icon{
    padding-bottom: 25px;
}

.line{
     border-bottom: 2px solid #03A9F4;
  width: 35px;
  margin: 0 auto;

}
</style>