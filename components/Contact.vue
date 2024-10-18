<template>
    <div id="contact" class="md: py-36 sm: py-12">
        <h4 class="text-center "><span class="nums-content">04.</span> What’s Next?</h4>
        <h2>Get In Touch</h2>
        <p>I'm looking for opportunities and job offers, so feel free to reach out! My inbox is always open, and I’ll do my best to respond</p>
        <div class="flex justify-center">
            <a href="#">Say Hello</a>
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
a{
    padding: 1.25rem 1.5rem;
    border: 1px solid var(--color);
    border-radius: 5px;
    margin: 20px auto;
    color: var(--color);
    font-family: "Sf Mono";
    font-size: 14px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
a:hover {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--color);
    transform: translate(-5px, -5px);
}
@media screen and (max-width: 600px) {
    p{
        font-size: 18px;
        width: 80%;
    }
}
</style>