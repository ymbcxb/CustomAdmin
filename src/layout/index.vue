<template>
    <div>
        <!--侧栏-->
        <SideBar class="sidebar-container"></SideBar>
        <!--导航栏-->
        <NavBar class="main-container"></NavBar>
        <!--主内容-->
        <AppMain class="main-container"></AppMain>
    </div>
</template>

<script>
    import NavBar from "./NavBar/index";
    import SideBar from "./Siderbar/index";
    import AppMain from "./AppMain/index"
    export default {
        name: "Layout",
        components:{
            NavBar,
            SideBar,
            AppMain
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    @import "~@/styles/variables.scss";
    @import "~@/styles/sidebar.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
    }

    .hideSidebar .fixed-header {
        width: calc(100% - 54px)
    }

    .mobile .fixed-header {
        width: 100%;
    }
</style>

