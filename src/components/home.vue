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
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item active">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>¥</i>
                                <span>99.00</span>
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
            <section class="home-goods-panel">
                <header class="home-goods-panel-head">
                    <h2 class="name">净化器级配件</h2>
                </header>
                <div class="goods-list-wrapper">
                    <ul class="goods-list">
                        <li class="double">
                            <img src="../assets/img/pinzhiloucengkongjing.webp" alt="">
                            <a href=""></a>
                        </li>
                        <li>
                            <img src="../assets/img/kouzhao.webp" alt="">
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item active">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>¥</i>
                                <span>99.00</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                            </div>
                            <a href=""></a>
                        </li>
                        <li>
                            <img src="../assets/img/activity_img1.png" alt="">
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>￥</i>
                                <span>99.00</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                            </div>
                            <a href=""></a>
                        </li>
                        <li>
                            <img src="../assets/img/activity_img1.png" alt="">
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>￥</i>
                                <span>99.00</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                            </div>
                            <a href=""></a>
                        </li>
                        <li>
                            <img src="../assets/img/activity_img1.png" alt="">
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>￥</i>
                                <span>99.00</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                            </div>
                            <a href=""></a>
                        </li>
                        <li>
                            <img src="../assets/img/activity_img1.png" alt="">
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>￥</i>
                                <span>99.00</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                            </div>
                            <a href=""></a>
                        </li>
                        <li>
                            <img src="../assets/img/activity_img1.png" alt="">
                            <h3 class="title">畅呼吸防护口罩（花粉、粉尘、PM2.5、病菌）</h3>
                            <ul class="dot-list">
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                                <li class="">
                                    <div class="dot-item">
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p class="price">
                                <i>￥</i>
                                <span>99.00</span>
                            </p>
                            <div class="operator">
                                <span class="detail-btn">
                                    <a href="">查看详情</a>
                                </span>
                            </div>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import PageTop from './top.vue'
import HeaderMenu from './headerMenu.vue'
import '../mock/mock.js'
import Axios from 'axios'
export default {
  data () {
    return {
      msg: 'hello',
      autoplaySpeed: 3000,
      activityList: [],
      hotList: [],
      lista: [0, 1, 2, 3]
    }
  },
  components: {
    PageTop,
    HeaderMenu
  },
  mounted () {
    var _self = this
    Axios.get('http://www.test.com/home').then(function (response) {
      var aList = response.data.activityList
      var hList = response.data.hotList
      for (let i = 0; i < aList.length; i++) {
        _self.activityList.push(aList[i].url)
      }
      for (let i = 0; i < hList.length; i++) {
        _self.hotList.push(hList[i])
      }
      console.log(_self.hotList)
    })
  },
  methods: {
    goodsMouseover: function (event) {
      event = window.event
      console.dir(event.target)
      this.goodsFn(event, true)
    },
    goodsMouseout: function (event) {
      event = window.event
      this.goodsFn(event, false)
    },
    goodsFn: (el, showBtn = true) => {
      event.stopPropagation()
      var childList = el.target.parentNode.children
      for (const item of childList) {
        if (item.className === 'price') {
          if (showBtn) item.style.opacity = '0'
          else item.style.opacity = '1'
        }
        if (item.className === 'operator') {
          if (showBtn) item.style.opacity = '1'
          else item.style.opacity = '0'
        }
      }
    }
  }
}
</script>
