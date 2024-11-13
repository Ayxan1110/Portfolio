<script setup>

const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
});

</script>

<template>
    <div v-if="show" class="loading-screen">
        <svg
            class="blink-animation"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon
                points="30,6 48,15 54,30 48,45 30,54 12,45 6,30 12,15"
                fill="transparent"
                stroke="var(--color)"
                stroke-width="3"
            />
            <text
                x="30"
                y="38"
                font-family="Arial"
                font-size="24"
                text-anchor="middle"
                fill="var(--color)"
            >
                A
            </text>
        </svg>
    </div>
</template>
  
<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.blink-animation {
    animation: blink 1s ease-in-out infinite;
}
</style>
  