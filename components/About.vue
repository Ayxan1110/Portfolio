<script setup>

</script>
<template>
  <div id="about" class="lg:py-36 md:py-24 sm:py-12 grid grid-cols-1 md:grid-cols-2">
    <div class="about-info">
      <h3 class="section-header"><span class="nums-content">01.</span> About Me</h3>
      <p class="about-text">
        I enjoy creating things that live on the internet.
        My interest in web development began in 2019 after completing a full stack development course at <a target="_blank" href="https://code.edu.az/" class="link">Code Academy</a>.
        <br />
        <br />
        Since then, I’ve been challenging myself to learn something new every day. I’ve had the privilege
        of working in various environments, from startups to large corporations, and my focus now is on building accessible
        and inclusive digital experiences.
        <br />
        <br />
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul class="list technos">
        <li>React</li>
        <li>Next</li>
        <li>Node</li>
        <li>JavaScript</li>
        <li>Vue</li>
        <li>TypeScript</li>
      </ul>
    </div>
    <div class="image-wrapper">
      <div class="image">
        <img 
          class="m-auto" 
          src="../assets/imgs/me2.png" 
          alt="photo"
        >
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper{
  width: 300px;
  height: 400px;
  margin: auto;
  position: relative;
  border: 2px solid var(--color);
  border-radius: 5px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.image img{
  border-radius: 5px;
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 3%;
  right: 3%;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 2;
}
.image:hover img{
  bottom: 4.5%;
  right: 4.5%;
  filter: none
}
.image:hover .overlay{
  bottom: 4.5%;
  right: 4.5%;
  filter: none
}
.overlay {
  position: absolute;
  border-radius: 5px;
  bottom: 3%;
  right: 3%;
  width: 100%;
  height: 100%;
  background-color: var(--color);
  border-radius: 5px;
  z-index: 5;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: .3;
}

.image:hover .overlay {
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
  .overlay{
    display: none;
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
