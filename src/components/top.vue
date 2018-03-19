<template>
    <header class="clear">
        <div class="g-center-wrapper">
            <h1 class="nav-logo">
                <a href="" title="锤子科技官网">Smartisan</a>
            </h1>
            <ul class="nav-list">
                <li><a class="active" href="">在线商城</a></li>
                <li><router-link to="/JGPro2">坚果 Pro2</router-link></li>
                <li><a href="">坚果Pro</a></li>
                <li><a href="">Smartisan OS</a></li>
                <li><a href="">应用下载</a></li>
                <li><router-link to="/Hello">Hello World</router-link></li>
            </ul>
            <ul class="nav-aside">
                <li class="nav-user">
                    <a href=""><Icon type="person" size="20"></Icon></a>
                </li>
                <li class="nav-cart">
                    <a href=""><Icon type="android-cart" size="20"></Icon></a>
                    <span class="cart-num">0</span>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {}
</script>
