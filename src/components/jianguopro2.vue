<template>
    <div>
        <PageTop></PageTop>
        <HeaderMenu></HeaderMenu>
    </div>
</template>
<script>
import PageTop from './top.vue'
import HeaderMenu from './headerMenu.vue'
import '../mock/mock'
export default {
  components: {PageTop, HeaderMenu}
}
</script>
