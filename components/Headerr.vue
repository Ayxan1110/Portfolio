<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav>
    <div class="header-nav flex justify-between items-center">
      <div class="header-logo">
        <Logo />
      </div>
      <div class="header-info flex gap-6 items-center">
        <ul class="flex justify-between gap-6">
          <li class="nav-section">
            <a href="#about"><span class="nums-header">01.</span> About</a>
          </li>
          <li class="nav-section">
            <a href="#experience"><span class="nums-header">02.</span> Experience</a>
          </li>
          <li class="nav-section">
            <a href="#projects"><span class="nums-header">03.</span> Work</a>
          </li>
          <li class="nav-section">
            <a href="#contact"><span class="nums-header">04.</span> Contact</a>
          </li>
        </ul>
        <a href="/AykhanDadashov_CV2024.pdf" target="_blank" class="resume-btn" download>Resume</a>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="hamburger-menu" v-if="isMenuOpen">
        <ul>
          <li class="nav-section" @click="closeMenu">
            <a href="#about"><span class="nums-header">01.</span> About</a>
          </li>
          <li class="nav-section" @click="closeMenu">
            <a href="#experience"
              ><span class="nums-header">02.</span> Experience</a
            >
          </li>
          <li class="nav-section" @click="closeMenu">
            <a href="#projects"><span class="nums-header">03.</span> Work</a>
          </li>
          <li class="nav-section" @click="closeMenu">
            <a href="#contact"><span class="nums-header">04.</span> Contact</a>
          </li>
          <div class="mt-24">
            <a href="/AykhanDadashov_CV2024.pdf" target="_blank" class="resume-btn" download>Resume</a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.menu-icon {
  width: 35px;
  height: 30px;
  display: none;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  z-index: 11;
}

.menu-icon div {
  background-color: var(--color);
  height: 4px;
  width: 100%;
  border-radius: 5px;
}
.nav-section {
  font-family: "SF Mono";
  color: #fff;
  font-size: 14px;
}
.nav-section:hover {
  transition-duration: .3s;
  color: var(--color);
}
.resume-btn:hover {
  outline: none;
  box-shadow: 4px 4px 0 0 var(--color);
  transform: translate(-5px, -5px);
}
.resume-btn {
  border: 1.5px solid var(--color);
  border-radius: 5px;
  padding: 0.75rem 1.25rem;
  font-size: 14px;
  font-family: "SF Mono";
  color: var(--color);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.header-nav {
  padding: 20px 48px;
  -webkit-box-shadow: 0 4px 6px -6px var(--color);
  -moz-box-shadow: 0 4px 6px -6px var(--color);
  box-shadow: 0 4px 6px -6px var(--color);
}
.hamburger-menu{
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  background-color: #373636;
  height: 100%;
  z-index: 10;
  align-items: center;
}
.hamburger-menu ul{
  margin: auto;
  text-align: center;
}
.hamburger-menu span{
  display: block;
}
.hamburger-menu li{
  font-size: 20px;
  margin-top: 20px;
}
@media screen and (max-width:768px) {
  .header-info{
    display: none;
  }
  .menu-icon {
    display: flex;
  }
  .hamburger-menu{
    display: flex;
  }
  .resume-btn {
    padding: 0.75rem 2.25rem;
    border: 2.5px solid var(--color);
    font-weight: bold;
    font-size: 16px;
  }
  body{
    overflow: hidden !important;
  }
}
@media screen and (max-width:600px) {
  .header-nav {
  padding: 20px;
  }
}
</style>
