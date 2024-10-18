<template>
    <div id="featured" class="py-36">
        <div>
            <h3 class="section-header"><span class="nums-content">03.</span> Some Things I’ve Built</h3>
        </div>
        <div class="grid grid-cols-2 mt-20">
            <div class="image-wrapper">
                <img src="../assets/imgs/halcyon.avif" alt="photo">
            </div>
            <div class="text text-end">
                <h3 class="pro-name">Halcyon Theme</h3>
                <div class="pro-info-rel">
                    <div class="pro-info -left-[15%]">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                </div>
                <div class="technos">
                    <ul class="justify-end">
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>Express</li>
                        <li>Spotify API</li>
                        <li>Heroku</li>
                    </ul>
                </div>
                <a href="#"></a>
            </div>
        </div>
        <div class="grid grid-cols-2 mt-32">
            <div class="text">
                <h3 class="pro-name">Halcyon Theme</h3>
                <div class="pro-info-rel">
                    <div class="pro-info -right-[15%]">
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    </div>
                </div>
                <div class="technos">
                    <ul>
                        <li>React</li>
                        <li>Styled Components</li>
                        <li>Express</li>
                        <li>Spotify API</li>
                        <li>Heroku</li>
                    </ul>
                </div>
                <a href="#"></a>
            </div>
            <div class="image-wrapper">
                <img src="../assets/imgs/halcyon.avif" alt="photo">
            </div>
        </div>
    </div>
  </template>
  
<style scoped>
h3{
    font-family: "CalibreB";
}
.pro-info-rel{
    position: relative;
    min-height: 180px;
}
.pro-info{
    margin-top: 30px;
    background-color: #373636c9;
    padding: 35px 20px;
    border-radius: 5px;
    line-height: 1.6;
    position: absolute;
}
.pro-name{
    font-size: 30px;
    font-family: "CalibreB";
}
.technos ul{
    display: flex;
    gap: 20px;
    margin-top: 10px;
}
.technos ul li{
    color: var(--color);
}
</style>
  