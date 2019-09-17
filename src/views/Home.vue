<template>
  <div>
    <nav-component></nav-component>
    <about-component></about-component>
    <feature-component></feature-component>
    <features-component></features-component>
    <tech-component></tech-component>

    <contact-component></contact-component>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavComponent from "../components/Nav.vue";
import AboutComponent from "../components/About.vue";
import FeatureComponent from "../components/Feature.vue";
import FeaturesComponent from "../components/Features.vue";
import TechComponent from "../components/Tech.vue";
import ContactComponent from "../components/Contact.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "home",
  components: {
    NavComponent,
    AboutComponent,
    FeatureComponent,
    FeaturesComponent,
    TechComponent,
    ContactComponent,
    FooterComponent
    
  }
};
</script>
<style scoped>
</style>