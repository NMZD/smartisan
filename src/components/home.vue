<template>
    <div>
        <PageTop></PageTop>
        <HeaderMenu></HeaderMenu>
        <div class="g-center-wrapper">
            <Carousel autoplay :autoplay-speed="autoplaySpeed" loop dots="inside">
                <CarouselItem>
                    <div>
                        <img src="../assets/img/3161.png" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div>
                        <img src="../assets/img/pinzhixinkongjingshoujiao1.png" alt="">
                    </div>
                </CarouselItem>
            </Carousel>
            <section class="home-activity">
                <ul>
                    <li class="activity-item" v-for="(item) in activityList" :key="item">
                        <img :src="item" alt="">
                        <a href=""></a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
import PageTop from "./top.vue";
import HeaderMenu from "./headerMenu.vue";
import "../mock/mock.js";
import Axios from "axios";
export default {
  data() {
    return {
      msg: "hello",
      autoplaySpeed: 3000,
      activityList: [],
      lista: [0, 1, 2, 3]
    };
  },
  components: {
    PageTop,
    HeaderMenu
  },
  mounted() {
    var _self = this;
    Axios.get("http://www.test.com/activity").then(function(response) {
      var list = response.data.activityList;
      for (let i = 0; i < list.length; i++) {
        _self.activityList.push(list[i].url);
      }
    });
  }
};
</script>