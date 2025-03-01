<script setup>
import { ref } from "vue";

const activeJob = ref("bonapp");

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
          <li :class="{ active: activeJob === 'bonapp' }">
            <button @click="showJob('bonapp')">BonApp</button>
          </li>
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
            ML Engineering Intern
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
              Gained hands-on experience in machine learning engineering and Python frameworks such as TensorFlow.
            </li>
            <li>
              Learned the basics of machine learning engineering, as well as
              broadened knowledge in Python by learning TensorFlow and similar
              libraries.
            </li>
            <li>
              Worked on detecting cars from satellite images by developing deep
              learning models for image segmentation and object detection.
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
            <li>
              Developed web parsers using Python and libraries like BeautifulSoup, Selenium, and Flask.
            </li>
            <li>
              Contributed in the Front-end and the Back-end of different.
              projects.
            </li>
            <li>
              Enhanced code maintainability by implementing modular and reusable components.
            </li>
          </ul>
        </div>
        <div class="expo-div" v-if="activeJob === 'webzool'">
          <h3 class="job-title">
            Front-End Developer (Remote)
            <a href="https://webzool.io/" target="_blank" class="text-lg link">
              <At />Webzool
            </a>
          </h3>
          <p class="job-date">Jun 2022 - Jul 2024</p>
          <ul class="job-info list">
            <li>
              Developed dynamic and responsive web pages using Next.js, React.js,
              Redux, and MobX to optimize performance and user experience.
            </li>
            <li>
              Enhanced SEO scores for mobile and desktop by 60% through efficient
              use of Next.js server-side rendering and optimization techniques.
            </li>
            <li>
              Designed and implemented interactive mini-games, improving user engagement.
            </li>
            <li>
              Automated workflows by implementing CI/CD pipelines using GitHub Actions, increasing deployment efficiency.
            </li>
          </ul>
        </div>
        <div class="expo-div" v-if="activeJob === 'bonapp'">
          <h3 class="job-title">
            Front-End Developer
            <a href="https://bonapp.group/" target="_blank" class="text-lg link">
              <At />BonApp
            </a>
          </h3>
          <p class="job-date">Dec 2024 - Present</p>
          <ul class="job-info list">
            <li>
              Collaborated on building scalable web applications using React,
              ensuring responsiveness and performance optimization.
            </li>
            <li>
              Implemented state management with Redux to maintain predictable and efficient UI workflows.
            </li>
            <li>
              Adopted Monorepo architecture to unify codebases and streamline development across multiple projects.
            </li>
            <li>
              Used Azure DevOps for task creation, branch management, and fostering
              seamless collaboration in agile development workflows.
            </li>
            <li>
              Designed wireframes and prototypes for a large-scale project using Figma,
              facilitating clear communication between design and development teams.
            </li>
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
