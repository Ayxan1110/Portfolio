<template>
    <div class="md: py-48 sm: py-18">
        <h2 class="asas">Hi, my name is</h2>
        <h1 class="name">Aykhan Dadashov</h1>
        <h3 class="sasa">I build things for the web.</h3>
        <p class="text-white">
            I'm a front-end developer passionate about building interactive and visually appealing web experiences. Currently, I'm focused on expanding my skills with Nuxt.js to create even more efficient and dynamic web applications.
        </p>
    </div>
</template>

<style scoped>
.asas{
    font-family: "SF Mono";
    color: var(--color);
    width: 14.5ch;
    animation: typing 2s steps(18), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
.name{
    color: #fff;
    font-size: clamp(40px, 8vw, 80px);
    font-family: "Calibre";
    font-weight: 800;
}
.sasa{
    color: gray;
    font-size: clamp(40px, 8vw, 80px);
    font-family: "Calibre";
    font-weight: 800;
    line-height: 95%;
}
p{
    font-family: "Calibre"; 
    width: 60%;
    font-size: 20px;
    margin-top: 30px;
}
@media screen and (max-width: 992px) {
    p {
      width: 100%;
    }
}
</style>