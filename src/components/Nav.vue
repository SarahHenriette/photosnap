<template>
     <div id="nav">
         <div id="contain-nav">
            <ul id="logo-nav">
                <li><Logo color="#000"/></li>
            </ul>
            <ul id="links-nav">
                <li><router-link to="/stories">Stories</router-link></li>
                <li><router-link to="/Features">Features</router-link></li>
                <li><router-link to="/Features">Pricing</router-link></li>
            </ul>
            <router-link to="/stories" class="btn-1">Get an invite</router-link>
         </div>
         <div id="contain-nav-mobile">
             <ul id="logo-nav-mobile">
                <li><Logo color="#000"/></li>
            </ul>
            <div class="menu-burger" @click="displayMenuMobile">
                <div class="menu-burger-line"></div>
                <div class="menu-burger-line"></div>
            </div>
            <div v-if="menuMobile" class="contain-menu-nav-mobile" >
                <ul id="links-nav-mobile">
                    <li><router-link to="/stories">Stories</router-link></li>
                    <li><router-link to="/Features">Features</router-link></li>
                    <li><router-link to="/Features">Pricing</router-link></li>
                </ul>
                <div class="line-contain-menu-nav-mobile"></div>
                <router-link to="/stories" class="btn-1">Get an invite</router-link>
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
                console.log("test")
                this.menuMobile = !this.menuMobile
            }
        }
    }
</script>

<style lang="scss" scoped>
    #nav {
        width: 100%;
        height: 72px;
        background-color: #FFF;
        justify-content: center;
        align-items: center;
        &, #contain-nav, #links-nav {
            display: flex;

        }
        ul {
            padding-left: 0;
            li {
                list-style-type: none;
            }
        }
        #contain-nav {
            width: 1110px;
            height: 40px;
            justify-content: space-between;
            align-items: center;
            // background-color: red;
        }
        #links-nav {
            width: 269px;
            height: 16px;
            justify-content: space-between;
        }
        #contain-nav-mobile {
            display: none;
        }
    }

    @media screen and (max-width: 690px) {
        #nav {
            #contain-nav {
                display: none;
            }
            #contain-nav-mobile {
                display: flex;
                width: 327px;
                height: 16px;
                justify-content: space-between;
                align-items: center;
                .menu-burger {
                    width: 20px;
                    height: 6px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    cursor: pointer;
                    .menu-burger-line {
                        width: 100%;
                        height: 1px;
                        background-color: #000;
                    }
                }
                .contain-menu-nav-mobile {
                    width: 100%;
                    height: 253px;
                    position: absolute;
                    left: 0;
                    top: 72px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    #links-nav-mobile {
                        width: 310px;
                        height: 100px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        a{
                            letter-spacing: 2.5px;
                        }
                    }
                    .line-contain-menu-nav-mobile {
                        width: 310px;
                        height: 1px;
                        background-color: #000;
                        margin: 20px 0;
                    }
                    .btn-1 {
                        width: 310px;
                    }
                }
            }
        }
    }
</style>