<template>
<div class="div-tech">
  <v-container class="tech" grid-list-md text-xs-center xs6 sm3 md3>
    <div class="desc">
      <h1>TECHNOLOGIES</h1>
      <p class="line"></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac vestibulum lectus. Aliquam nec magna pulvinar odio tristique condimentum. Suspendisse pellentesque lectus massa, vel rhoncus tellus malesuada consequat. Vivamus</p>
    </div>
    <v-layout row wrap justify-center>
      <v-flex xs6 sm3 md3 v-for="item in items" :key="item.title">
        <v-slide-y-transition>
          <v-card v-if="item.active" elevation="0">
            <v-img justify-content: centermax-width="64">
              <img :src="item.icon" />
            </v-img>

            <v-card-text>
              <div class="title">{{item.title}}</div>
            </v-card-text>
          </v-card>
        </v-slide-y-transition>
      </v-flex>
    </v-layout>

    <div class="text-xs-center other">
      <v-btn class="btn_show" @click="show" outline>Other technologies</v-btn>
    </div>

    <p>
      <v-divider></v-divider>
    </p>
  </v-container>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      

      items: [
        {
          title: ".NET",
          active: true,
          icon:
            "http://icons.iconarchive.com/icons/dakirby309/simply-styled/64/Microsoft-Visual-Studio-icon.png"
        },
        {
          title: "JavaScript ",
          active: true,
          icon:
            "http://icons.iconarchive.com/icons/ahmadhania/spherical/64/file-JavaScript-icon.png"
        },
        {
          title: "Java",
          active: true,
          icon:
            "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/64/java-icon.png"
        },
        {
          title: "HTML5",
          active: true,
          icon:
            "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-64.png"
        },

        {
          title: ".NET",
          active: false,
          icon:
            "http://icons.iconarchive.com/icons/dakirby309/simply-styled/64/Microsoft-Visual-Studio-icon.png"
        },
        {
          title: "PHP5 ",
          active: false,
          icon:
            "http://icons.iconarchive.com/icons/ahmadhania/spherical/64/file-PHP-icon.png"
        },
        {
          title: "Java",
          active: false,
          icon:
            "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/64/java-icon.png"
        },
        {
          title: "HTML5",
          active: false,
          icon:
            "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-64.png"
        }
      ]
    };
  },

  methods: {
    show: function(event) {
      if (this.items[4].active === true) {
        this.items[4].active = false;
        this.items[5].active = false;
        this.items[6].active = false;
        this.items[7].active = false;
        this.items[8].active = false;
      }
      if (this.items[4].active === false) {
        this.items[4].active = true;
        this.items[5].active = true;
        this.items[6].active = true;
        this.items[7].active = true;
        this.items[8].active = true;
        this.btnTitle = "Ukryj";
      }
    }
  }
};
</script>

<style scoped >
.div-tech{
    background-color: white;
}
.other {
  padding-top: 30px;
}

.desc {
  padding-top: 30px;
  padding-bottom: 30px;
}

.desc h1 {
  padding-bottom: 30px;

  font-weight: 600;
  letter-spacing: 3px;
}

.tech {
  padding-bottom: 0px;
  
}

.btn_show:hover {
  color: #03a9f4;
}

.line {
  border-bottom: 2px solid #03a9f4;
  width: 35px;
  margin: 0 auto;
}

p {
  margin-top: 30px;
}
</style>