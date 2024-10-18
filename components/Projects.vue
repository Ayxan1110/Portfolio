<template>
    <div id="projects" class="md:py-36 sm: py-12">
        <div>
            <h3 class="section-header"><span class="nums-content">03.</span>My Projects</h3>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-4">
            <div class="project-wrap">
                <div class="project">
                    <div class="flex justify-between items-center">
                        <img width="40" height="40" src="../public/folder.svg" alt="folder">
                        <a style="height: 20px; width: 20px;" href="#"><img src="../public/github.svg" alt="folder"></a>
                    </div>
                    <div class="mt-6">
                        <h3 class="project-name">Integrating Algolia Search with WordPress Multisite</h3>
                        <p class="project-desc">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    </div>
                    <div>
                        <ul>
                            <li>Algolia</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                            <li>PHP</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="project-wrap">
                <div class="project">
                    <div class="flex justify-between items-center">
                        <img width="40" height="40" src="../public/folder.svg" alt="folder">
                        <a style="height: 20px; width: 20px;" href="#"><img src="../public/github.svg" alt="folder"></a>
                    </div>
                    <div class="mt-6">
                        <h3 class="project-name">Integrating Algolia Search with WordPress Multisite</h3>
                        <p class="project-desc">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    </div>
                    <div>
                        <ul>
                            <li>Algolia</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="project-wrap">
                <div class="project">
                    <div class="flex justify-between items-center">
                        <img width="40" height="40" src="../public/folder.svg" alt="folder">
                        <a style="height: 20px; width: 20px;" href="#"><img src="../public/github.svg" alt="folder"></a>
                    </div>
                    <div class="mt-6">
                        <h3 class="project-name">Integrating Algolia Search with WordPress Multisite</h3>
                        <p class="project-desc">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                    </div>
                    <div>
                        <ul>
                            <li>Algolia</li>
                            <li>WordPress</li>
                            <li>PHP</li>
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
}
ul{
    display: flex;
    align-items: flex-end;
    -moz-box-flex: 1;
    flex-grow: 1;
    gap: 10px;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
}
</style>
  