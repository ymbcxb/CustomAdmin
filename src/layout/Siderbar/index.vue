<template>
    <div>
<!--        <logo v-if="showLogo" :collapse="isCollapse" />-->
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                    :default-active="activeMenu"
                    :collapse="isCollapse"
                    :background-color="variables.menuBg"
                    :text-color="variables.menuText"
                    :active-text-color="variables.menuActiveText"
                    :collapse-transition="false"
                    mode="vertical"
            >
                <sidebar-item v-for="route in routes" :key="route.path" :item="route"/>
<!--              <div>-->
<!--                  <el-submenu>-->
<!--                      <template slot="title">aa</template>-->
<!--                  </el-submenu>-->
<!--              </div>-->
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import variables from '@/styles/variables.scss'
    import SidebarItem from "./components/SidebarItem";
    export default {
        name: "SideBar",
        components:{
            SidebarItem
        },
        computed:{
            variables(){
                return variables;
            },
            routes(){
                console.log(this.$router.options.routes)
                return this.$router.options.routes;
            }
        }
    }
</script>

<style scoped>
</style>
