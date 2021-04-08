<template>
     <div class="navMenu">
         <div class="navMenu--desktop">
            <ul class="navMenu--desktop_logo">
                <li><Logo color="#000"/></li>
            </ul>
            <ul class="navMenu--desktop_links">
                <li><router-link to="/stories">Stories</router-link></li>
                <li><router-link to="/Features">Features</router-link></li>
                <li><router-link to="/Features">Pricing</router-link></li>
            </ul>
            <router-link to="/stories" class="navMenu--desktop_btn1 btn-1">Get an invite</router-link>
         </div>
         <div class="navMenu--mobile">
            <ul class="navMenu--mobile_logo">
                <li><Logo color="#000"/></li>
            </ul>
            <div class="navMenu--mobile_iconBurger" @click="displayMenuMobile">
                <div class="navMenu--mobile_lineIconBurger"></div>
                <div class="navMenu--mobile_lineIconBurger"></div>
            </div>
            <div v-if="menuMobile" class="navMenu--mobile_menuBurger" >
                <ul class="navMenu--mobile_linksMenuBurger">
                    <li><router-link to="/stories">Stories</router-link></li>
                    <li><router-link to="/Features">Features</router-link></li>
                    <li><router-link to="/Features">Pricing</router-link></li>
                </ul>
                <div class="navMenu--mobile_lineMenuBurger"></div>
                <router-link to="/stories" class="navMenu--mobile_btn-1 btn-1">Get an invite</router-link>
            </div>
         </div>
    </div>
</template>

<script>
    import Logo from "./Logo"

    export default {
        components: {
            Logo
        },
        data () {
            return {
                menuMobile: false,
            }
        },
        methods: {
            displayMenuMobile(){
                this.menuMobile = !this.menuMobile
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>