<script setup>
import { ref } from "vue";

const activeJob = ref("webzool");

const showJob = (name) => {
  activeJob.value = name;
};
</script>

<template>
  <div id="experience" class="lg: py-36 md: py-36 sm: py-12">
    <div>
      <h3 class="section-header text-center">
        <span class="nums-content">02.</span>Where I’ve Worked
      </h3>
    </div>
    <div class="experience-div">
      <div>
        <ul class="job-list">
          <li :class="{ active: activeJob === 'webzool' }">
            <button @click="showJob('webzool')">Webzool</button>
          </li>
          <li :class="{ active: activeJob === 'jeyhun' }">
            <button @click="showJob('jeyhun')">Jeykhun Imanov Studio</button>
          </li>
          <li :class="{ active: activeJob === 'azercosmos' }">
            <button @click="showJob('azercosmos')">Azercosmos</button>
          </li>
        </ul>
      </div>
      <div class="expo-info pl-4">
        <div class="expo-div" v-if="activeJob === 'azercosmos'">
          <h3 class="job-title">
            Machine Learning Engineering Intern
            <a
              href="https://azercosmos.az"
              target="_blank"
              class="text-lg link"
            >
              <At />Azercosmos
            </a>
          </h3>
          <p class="job-date">Jul - Aug 2021</p>
          <ul class="job-info list">
            <li>
              Learned the basics of machine learning engineering, as well as
              broadened knowledge in Python by learning TensorFlow and similar
              libraries.
            </li>
            <li>
              Worked on detecting cars from satellite images by developing deep
              learning models for image segmentation and object detection.
            </li>
            <li>
              Collaborated with a team to preprocess satellite data, fine-tune
              models, and improve accuracy using transfer learning techniques.
            </li>
          </ul>
        </div>
        <div class="expo-div" v-if="activeJob === 'jeyhun'">
          <h3 class="job-title">
            Python Developer
            <a href="https://www.jis.az/" target="_blank" class="text-lg link">
              <At />Jeyhun Imanov Studio
            </a>
          </h3>
          <p class="job-date">Jul - Nov 2021</p>
          <ul class="job-info list">
            <li>Tasked to make web parsers using Python and its' libraries</li>
            <li>Fixed various bugs in Python based software</li>
            <li>
              Contributed in the Front-end and the Back-end of different
              projects.
            </li>
            <li>
              Used HTML5, CSS3, JS ECMA6, Python, Flask (BS4, Selenium and
              similar libraries)
            </li>
          </ul>
        </div>
        <div class="expo-div" v-if="activeJob === 'webzool'">
          <h3 class="job-title">
            React Developer
            <a href="https://webzool.io/" target="_blank" class="text-lg link">
              <At />Webzool
            </a>
          </h3>
          <p class="job-date">Jun 2022 - Jul 2024</p>
          <ul class="job-info list">
            <li>
              Tasked to make web pages using Next JS, React JS, Redux, and MobX
            </li>
            <li>Solve bugs and errors of web pages on front-end projects</li>
            <li>
              Optimized performance of a React.js application, resulting in a
              30% decrease in load times and improved user experience
            </li>
            <li>Develop mini games for users</li>
            <li>Implement Github Actions in companies' projects using</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#experience {
  max-width: 800px;
  margin: auto;
}
.experience-div {
  margin-top: 50px;
  display: flex;
}
button {
  padding: 15px;
  width: 100%;
  text-align: start;
}
.expo-div {
  animation: fadeIn 1s;
}
.job-list li:hover {
  color: var(--color);
  transition-duration: 0.5s;
  background-color: #1c1c1cc9;
}
.job-list li {
  border-left: 2px solid gray;
  padding-left: 10px;
  white-space: nowrap;
}
.active {
  border-left: 2px solid var(--color) !important;
  color: #f43200;
  transition-duration: 0.5s;
  background-color: #1c1c1cc9;
  box-shadow: -10px 0 10px -10px rgba(255, 99, 16, 0.75);
}
.job-title {
  font-family: "CalibreB";
  font-size: 20px;
}
.link {
  font-size: 22px;
}
.job-date {
  font-family: "SF Mono";
  font-size: 14px;
  margin-top: 10px;
}
.expo-info li {
  font-family: "Calibre";
  font-size: 18px;
  margin-top: 10px;
}
.job-info {
  margin-top: 20px;
  margin-left: 20px;
}
.job-list {
  min-width: 190px;
}
.expo-info {
  min-height: 300px;
}
.list li::before {
  width: 1em;
  height: 1em;
  left: -25px;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (max-width: 600px) {
  .experience-div {
    margin-top: 10px;
    display: block;
  }
  .expo-info {
    margin-top: 30px;
  }
  .job-list {
    display: flex;
    margin-top: 20px;
    overflow-x: scroll;
  }
  .job-list li {
    width: 100%;
    border-color: var(--color);
    border-left: none !important;
    border-top: 2px solid gray;
  }
  .active {
    border-top: 2px solid var(--color) !important;
    color: #f43200;
    transition-duration: 0.5s;
    background-color: #1c1c1cc9;
    box-shadow: 0 -10px 10px -10px rgba(255, 99, 16, 0.75);
  }
}
</style>
