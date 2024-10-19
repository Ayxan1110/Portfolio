<script setup>

</script>

<template>
    <div class="side-elements">
        <div class="social-div">
            <ul>
                <li class="icons"><a href="https://github.com/Ayxan1110" target="_blank"><Github /></a></li>
                <li class="icons"><a href="https://www.instagram.com/ay.xan11/" target="_blank"><Instagram /></a> </li>
                <li class="icons"><a href="https://www.linkedin.com/in/aykhan-dadashov-302914192/" target="_blank"><LinkedIn /></a></li>
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
    width: 100%;
    display: flex;
    align-items: center;
}
.mail-div{
    height: 350px;
}
.social-div{
    position: fixed;
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 20px;
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
    display: flex;
    justify-content: center;
}
.mail-div{
    position: fixed;
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: 20px;
    left: auto;
    z-index: 10;
    margin: auto;
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
    width: auto;
    height: auto;
}
.icons:hover{
    transform: translateY(-5px);
}
.icons:hover svg{
    stroke: var(--color);
}
@media screen and (max-width:768px) {
    .mail-div{
        display: none;
    }
    .social-div{
        display: none;
    }
}
</style>