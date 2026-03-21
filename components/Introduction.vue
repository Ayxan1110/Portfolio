<template>
    <div class="my-auto py-60">
        <h2 class="asas animate__animated animate__fadeInUp">Hi, my name is</h2>
        <h1 class="name animate__animated animate__fadeInUp" style="animation-delay: 1.2s;">Aykhan Dadashov</h1>
        <h3 class="sasa animate__animated animate__fadeInUp" style="animation-delay: 1.2s;">I build things for the web.</h3>
        <p class="text-white animate__animated animate__fadeInUp" style="animation-delay: 1.2s;">
          I'm a Software Developer focused on building scalable web applications and data-driven products. I enjoy working across the full stack, from crafting responsive UIs to integrating APIs and analytics tools. Recently, I've been exploring AI integration and mobile app development, turning creative ideas into real products.
        </p>
    </div>
</template>

<style scoped>
.asas{
  font-family: "SF Mono";
  color: var(--color);
  width: 14.5ch;
  animation: typing 2s steps(18), blink 1.2s step-end infinite alternate;
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
    width: 80%;
    font-size: 20px;
    margin-top: 30px;
}
@media screen and (max-width: 992px) {
    p {
      width: 100%;
    }
}
</style>