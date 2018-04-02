<template>
    <div class="g-container">
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
            <section class="home-goods-panel">
                <header class="home-goods-panel-head">
                    <h2 class="name">热门商品</h2>
                    <div class="right">
                        <div class="hot-toggle">
                            <span class="toggle-arrow disabled"><Icon type="android-arrow-dropleft-circle"></Icon></span>
                            <span class="toggle-arrow"><Icon type="android-arrow-dropright-circle"></Icon></span>
                        </div>
                    </div>
                </header>
                <div class="goods-list-wrapper">
                    <ul class="goods-list">
                        <li v-for="item in hotList" :key="item.id">
                            <img :src="item.imgUrl" alt="">
                            <h3 class="title">{{item.title}}</h3>
                            <ul class="dot-list">
                                <template v-for="(color, index) in item.color">
                                    <li class="dot-item active" :key="index" v-if="index == 0" @mouseover="dotHover()">
                                        <span :style="{backgroundColor: color}"></span>
                                    </li>
                                    <li class="dot-item" :key="index" v-else  @mouseover="dotHover()">
                                        <span :style="{backgroundColor: color}"></span>
                                    </li>
                                </template>
                            </ul>
                            <p class="price">
                                <i>¥</i>
                                <span>{{item.price}}</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                                <span class="add-cart-btn">加入购物车</span>
                            </div>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="home-goods-panel" v-for="(list, index) in floorsList" :key="index">
                <header class="home-goods-panel-head">
                    <h2 class="name">{{list.name}}</h2>
                </header>
                <div class="goods-list-wrapper">
                    <ul class="goods-list">
                        <template v-for="(item, index) in list.list">
                            <li class="double" v-if="index == 0" :key="index">
                                <img :src="item.imgUrl" alt="">
                                <a href=""></a>
                            </li>
                            <li v-else :key="index">
                                <img :src="item.imgUrl" alt="">
                                <h3 class="title">{{item.title}}</h3>
                                <ul class="dot-list">
                                    <template v-for="(color, index) in item.color">
                                        <li class="dot-item active" :key="index" v-if="index == 0" @mouseover="dotHover()">
                                            <span :style="{backgroundColor: color}"></span>
                                        </li>
                                        <li class="dot-item" :key="index" v-else  @mouseover="dotHover()">
                                            <span :style="{backgroundColor: color}"></span>
                                        </li>
                                    </template>
                                </ul>
                                <p class="price">
                                    <i>¥</i>
                                    <span>{{item.price}}</span>
                                </p>
                                <div class="operator">
                                    <span class="detail-btn">
                                        <a href="">查看详情</a>
                                    </span>
                                </div>
                                <a href=""></a>
                            </li>
                        </template>
                    </ul>
                </div>
            </section>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>
<script>
import PageTop from './top.vue'
import HeaderMenu from './headerMenu.vue'
import PageFooter from './footer'
import '../mock/mock.js'
import Axios from 'axios'
export default {
  data () {
    return {
      msg: 'hello',
      autoplaySpeed: 3000,
      activityList: [],
      hotList: [],
      floorsList: []
    }
  },
  components: {
    PageTop,
    HeaderMenu,
    PageFooter
  },
  mounted () {
    var _self = this
    Axios.get('http://www.test.com/home').then(function (response) {
      var aList = response.data.activityList
      var hList = response.data.hotList
      var fList = response.data.floorsList
      for (let i = 0; i < aList.length; i++) {
        _self.activityList.push(aList[i].url)
      }
      for (let i = 0; i < hList.length; i++) {
        _self.hotList.push(hList[i])
      }
      for (let i = 0; i < fList.length; i++) {
        _self.floorsList.push(fList[i])
      }
    })
  },
  methods: {
    dotHover: (event = window.event) => {
      event.stopPropagation()
      let dotList = event.currentTarget.parentNode.children
      for (let i = 0; i < dotList.length; i++) {
        dotList[i].className = 'dot-item'
      }
      if (event.target.tagName === 'SPAN') {
        event.target.parentNode.className += ' active'
      } else {
        event.target.className += ' active'
      }
    }
  }
}
</script>
