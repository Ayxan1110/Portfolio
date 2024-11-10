<script>
export default {
  data() {
    return {
      tictac: {
        linkUrl: "https://ayxan1110.github.io/TicTacToeJS/",
        repoUrl: "https://github.com/Ayxan1110/TicTacToeJS/"
      },
      spa: {
        linkUrl: "https://restaurantmenu110.netlify.app/",
        repoUrl: "https://github.com/Ayxan1110/Restaurant-Menu-SPA"
      }
    };
  },
  methods: {
    redirectToPage(url) {
        window.open(url, "_blank");
    }
  }
}
</script>
<template>
    <div id="projects" class="md:py-36 sm: py-12">
        <div>
            <h3 class="section-header"><span class="nums-content">03.</span>My Projects</h3>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-4">
            <div @click="redirectToPage(tictac.linkUrl)" class="project-wrap">
                <div class="project">
                    <div class="flex justify-between items-center">
                        <img width="40" height="40" src="../public/folder.svg" alt="folder">
                        <a class="gh-icon" :href="tictac.repoUrl" target="_blank" @click.stop><Github /></a>
                    </div>
                    <div class="mt-6">
                        <h3 class="project-name">Tic Tac Toe</h3>
                        <p class="project-desc">Classic Tic-Tac-Toe game built with jQuery</p>
                    </div>
                    <div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div @click="redirectToPage(spa.linkUrl)" class="project-wrap">
                <div class="project">
                    <div class="flex justify-between items-center">
                        <img width="40" height="40" src="../public/folder.svg" alt="folder">
                        <a class="gh-icon" :href="spa.repoUrl" target="_blank" @click.stop><Github /></a>
                    </div>
                    <div class="mt-6">
                        <h3 class="project-name">Restaurant Menu SPA</h3>
                        <p class="project-desc">A Single-Page Application (SPA) displaying a restaurant menu.</p>
                    </div>
                    <div>
                        <ul>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Redux Thunk</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="project-wrap">
                <div class="project">
                    <div class="flex justify-between items-center">
                        <img width="40" height="40" src="../public/folder.svg" alt="folder">
                        <a class="gh-icon" target="_blank" @click.stop><Github /></a>
                    </div>
                    <div class="mt-6">
                        <h3 class="project-name">Coming soon...</h3>
                        <p class="project-desc">In a short period of time there will be valid projects</p>
                    </div>
                    <div>
                        <ul>
                            <li>Just</li>
                            <li>Wait</li>
                            <li>)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<style scoped>
.project{
    padding: 30px 20px;
    border-radius: 5px;
    background-color: #373636c9;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    height: 100%;
}
.project-wrap{
    position: relative;
}
.project:hover{
    transform: translateY(-5px);
}
.project:hover .project-name{
    color: var(--color);
    transition-duration: .5s;
}
.project-name{
    font-family: "CalibreB";
    font-size: 22px;
}
.project-desc{
    margin-top: 10px;
    font-size: 18px;
    font-family: "Calibre";
    min-height: 50px;
}
ul{
    display: flex;
    align-items: flex-end;
    -moz-box-flex: 1;
    flex-grow: 1;
    gap: 8px;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
}
.gh-icon{
    color: #fff !important;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 11;
}
.gh-icon svg{
    width: 25px;
    height: 25px;
}
.gh-icon:hover svg{
    stroke: var(--color);
    transition-duration: .3s;
}
</style>
  