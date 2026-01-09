<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';
import type { RankingData } from '../types/api';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
  Title
);

const props = defineProps<{
  data: RankingData;
}>();

const colors = [
  '#ff6384',
  '#36a2eb',
  '#ffcd56',
  '#4bc0c0',
  '#9966ff',
  '#ff9f40',
  '#8e5ea2',
  '#3cba9f',
];

const canvas = ref<HTMLCanvasElement | null>(null);
let chart: Chart | null = null;

function renderChart() {
  if (!canvas.value) return;

  if (chart) chart.destroy();

  const labels = Array.from(
    new Set(
      Object.values(props.data)
        .flat()
        .map((r) => r.date)
    )
  ).sort();

  const datasets = Object.entries(props.data).map(
    ([domain, rankings], index) => ({
      label: domain,
      data: labels.map(
        (date) => rankings.find((r) => r.date === date)?.rank ?? null
      ),
      borderWidth: 2,
      tension: 0.3,
      spanGaps: true,
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length],
    })
  );

  chart = new Chart(canvas.value, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Domain Rankings',
          font: {
            size: 18,
          },
          color: '#333',
        },
      },
      scales: {
        y: {
          title: { display: true, text: 'Rank' },
        },
        x: {
          title: { display: true, text: 'Date' },
        },
      },
    },
  });
}

watch(() => props.data, renderChart, { deep: true });
onMounted(renderChart);
</script>

<style>
canvas {
  margin: 2rem 0;
}
</style>
