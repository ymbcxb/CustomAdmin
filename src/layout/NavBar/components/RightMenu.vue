<template>
    <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img src="@/assets/faceImg.gif" class="user-avatar">
                <i class="el-icon-caret-bottom" />
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link to="/">
                    <el-dropdown-item>
                        Home
                    </el-dropdown-item>
                </router-link>
                <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
                    <el-dropdown-item>Github</el-dropdown-item>
                </a>
                <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
                    <el-dropdown-item>Docs</el-dropdown-item>
                </a>
                <el-dropdown-item divided @click.native="logout">
                    <span style="display:block;">Log Out</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "RightMenu"
    }
</script>

<style lang="scss" scoped>
    .right-menu{
        float: right;
        height: 100%;
        line-height: 50px;
    }
    .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
            margin-top: 5px;
            position: relative;

            .user-avatar {
                cursor: pointer;
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }

            .el-icon-caret-bottom {
                cursor: pointer;
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
</style>
