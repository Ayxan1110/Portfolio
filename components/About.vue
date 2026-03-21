<script setup>

</script>
<template>
  <div v-reveal id="about" class="lg:py-36 md:py-24 sm:py-12 grid grid-cols-1 md:grid-cols-2">
    <div class="about-info">
      <h3 class="section-header"><span class="nums-content">01.</span> About Me</h3>
      <p class="about-text">
        I enjoy creating things that live on the internet.
        My interest in web development began in 2019 after completing a full stack development course at <a target="_blank" href="https://code.edu.az/" class="link">Code Academy</a>.
        <br />
        <br />
        Since then, I’ve worked across different environments — from remote teams to fast-paced startups — building
        everything from responsive frontends to full-stack platforms with analytics, search, and API integrations.
        <br />
        <br />
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul class="list technos">
        <li>React / Next.js</li>
        <li>TypeScript</li>
        <li>Node / NestJS</li>
        <li>GraphQL</li>
        <li>Vue / Nuxt</li>
        <li>PostgreSQL / Prisma</li>
      </ul>
    </div>
    <div class="image-wrapper">
      <img
        class="about-img"
        src="../assets/imgs/profile.jpg"
        alt="photo"
      >
      <div class="overlay"></div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper{
  width: 300px;
  height: 400px;
  margin: auto;
  position: relative;
  cursor: pointer;
}
.image-wrapper::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color);
  border-radius: 5px;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 0;
}
.image-wrapper:hover::after {
  transform: translate(5px, 5px);
}
.about-img{
  position: relative;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.image-wrapper:hover .about-img{
  transform: translate(-5px, -5px);
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: var(--color);
  z-index: 3;
  opacity: .3;
  transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.image-wrapper:hover .overlay {
  opacity: 0;
}

.section-header {
  color: #fff;
  font-family: "CalibreB";
  font-size: 32px;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-header::after {
  content: "";
  display: block;
  position: relative;
  top: 0;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: gray;
}
.about-text {
  color: #fff;
  letter-spacing: 0px;
  width: 100%;
  font-size: 20px;
  font-family: "Calibre";
}
p {
  font-family: "Calibre"; 
  width: 60%;
  font-size: 20px;
  margin-top: 30px;
}
.technos{
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0 0 20px;
}
.technos li{
  color: #fff;
  margin-top: 5px;
  font-size: 13px;
}
.list li::before{
  width: .9em;
  height: .9em;
}
@media screen and (max-width: 768px) {
  .image-wrapper{
    margin-top: 50px;
  }
}
@media screen and (max-width: 480px) {
  .image-wrapper::after{
    top: 10px;
    left: 10px;
  }
  .image-wrapper{
    width: 220px;
    height: 280px;
  }
  .about-text{
    font-size: 18px;
  }  
}
</style>
