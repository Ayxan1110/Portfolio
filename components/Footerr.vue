<script setup>
</script>

<template>
    <div class="side-elements">
        <div class="social-div">
            <ul>
                <li class="icons"><a href="#"><img src="../public/github.svg" alt="folder"> </a></li>
                <li class="icons"><a href="#"><img src="../public/ig.svg" alt="folder"></a> </li>
                <li class="icons"><a href="#"><LinkedIn /></a></li>
            </ul>
        </div>
        <div class="mail-div">
            <a class="animated-elm mail" target="_blank" href="mailto:ayxan110.dadashov@gmail.com">ayxan110.dadashov@gmail.com</a>
        </div>
    </div>
</template>

<style scoped>
.mail{
    writing-mode: vertical-rl;
    text-align: center;
    font-family: "Sf Mono";
    font-size: 14px;
    margin-bottom: 30px;
}
.mail-div{
    height: 350px;
}
.social-div{
    position: fixed;
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
}
.social-div::after{
    content: "";
    display: block;
    width: 1px;
    height: 100px;
    margin: 0px auto;
    background-color: gray;
}
ul{
    margin-bottom: 30px;
}
ul li{
    margin: 30px auto;
}
.mail-div{
    position: fixed;
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: 40px;
    left: auto;
    z-index: 10;
}
.mail-div::after{
    content: "";
    display: block;
    width: 1px;
    height: 200px;
    margin: 0px auto;
    background-color: gray;
}
.icons{
    color: #fff !important;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 1.8em;
    height: 1.8em;
}
.icons:hover{
    transform: translateY(-5px);
}
</style>