<template>
    <div id="contact" class="md: py-36 sm: py-12">
        <h4 class="text-center "><span class="nums-content">04.</span> What’s Next?</h4>
        <h2>Get In Touch</h2>
        <p>I'm looking for opportunities and job offers, so feel free to reach out! My inbox is always open, and I’ll do my best to respond</p>
        <div class="flex justify-center">
            <a class="mail" target="_blank" href="mailto:ayxan110.dadashov@gmail.com">Say Hello</a>
        </div>
        <div class="social-div">
            <ul>
                <li class="icons"><a href="https://github.com/Ayxan1110" target="_blank"><Github /></a></li>
                <li class="icons"><a href="https://www.instagram.com/ay.xan11/" target="_blank"><Instagram /></a> </li>
                <li class="icons"><a href="https://www.linkedin.com/in/aykhan-dadashov-302914192/" target="_blank"><LinkedIn /></a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
h4{
    font-size: 18px !important;
    font-family: "Sf Mono";
    color: var(--color);
}
span{
    font-size: 16px;
}
h2{
    font-size: 60px;
    font-family: "CalibreB";
    font-weight: bold;
    text-align: center;
}
p{
    text-align: center;
    font-family: "Calibre";
    font-size: 20px;
    width: 60%;
    margin: 20px auto;
}
.mail{
    padding: 1.25rem 1.5rem;
    border: 1px solid var(--color);
    border-radius: 5px;
    margin: 20px auto;
    color: var(--color);
    font-family: "Sf Mono";
    font-size: 14px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.mail:hover {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--color);
    transform: translate(-5px, -5px);
}
.social-div{
    display: none;
}
.social-div ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 100px;
}
.social-div ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
}
.social-div svg{
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 768px) {
    p{
        font-size: 18px;
        width: 80%;
    }
    .social-div{
        display: block;
    }
}
@media screen and (max-width: 600px) {
    p{
        font-size: 18px;
        width: 80%;
    }
}
</style>