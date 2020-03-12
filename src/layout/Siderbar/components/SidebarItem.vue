<template>
    <div v-if="!item.hidden">
      <div v-if="hasNoMeta(item)">
        <el-menu-item @click="menuClick(item)">
          <template slot="title">
            {{item.children[0].meta.title}}
          </template>
        </el-menu-item>
      </div>
      <div v-else>
        <el-submenu>
          <template slot="title">
            {{item.meta.title}}
          </template>
          <el-menu-item v-for="(child,index) in item.children" :key =index @click="menuClick(child)">
            <template slot="title">
              {{child.meta.title}}
            </template>
          </el-menu-item>
        </el-submenu>
      </div>
    </div>
<!--        <sidebar-item-->
<!--                v-for="child in item.children"-->
<!--                :key="child.path"-->
<!--                :is-nest="true"-->
<!--                :item="child"-->
<!--                :base-path="resolvePath(child.path)"-->
<!--                class="nest-menu"-->
<!--        />-->
</template>

<script>
export default {
  name: 'SidebarItem',

  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
  },
  methods:{
    hasNoMeta(item){
      // console.log(item.children.length === 1)
      if(item.meta == null && item.children != null && item.children.length === 1){
        return true;
      }
      return false;
    },
    menuClick(item){
      console.log(item);
      this.$router.push(item);
    }
  }
}
</script>
