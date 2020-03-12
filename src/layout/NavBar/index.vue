<template>
    <div class="navbar">
        <Hamburger class="hamburger-container"></Hamburger>
        <Breadcrumb class="breadcrumb-container"></Breadcrumb>
        <RightMenu></RightMenu>
    </div>
</template>

<script>
    import Hamburger from "./components/Hamburger";
    import Breadcrumb from "./components/Breadcrumb";
    import RightMenu from "./components/RightMenu";
    export default {
        name: "NavBar",
        components:{
            RightMenu,
            Hamburger,
            Breadcrumb,
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);

        .hamburger-container {
            line-height: 46px;
            height: 100%;
            float: left;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color:transparent;

            &:hover {
                background: rgba(0, 0, 0, .025)
            }
        }

        .breadcrumb-container {
            float: left;
        }
    }
</style>

