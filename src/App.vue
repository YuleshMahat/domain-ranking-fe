<script lang="ts" setup>
import { ref } from 'vue';
import DomainsHolder from './components/DomainsHolder.vue';
import Nav from './components/Nav.vue';
import type { RankingData, Rankings } from './types/api';
import { getRankings } from './features/domain/domainApi';
import DomainChart from './components/DomainChart.vue';
import { createToast } from 'mosha-vue-toastify';

const rankingData = ref<RankingData>({});

const loading = ref<boolean>(false);

const handleSeeRanking = async (domains: Rankings) => {
  loading.value = true;
  const response = await getRankings(domains);
  if (response.status === 'error') {
    createToast(response.message + response.invalidDomains, { type: 'danger' });

    loading.value = false;
    return;
  }

  loading.value = false;
  if (response?.data) rankingData.value = response.data;
};

const handleDomainRemoved = (domain: string) => {
  delete rankingData.value[domain];
};
</script>

<template>
  <Nav />
  <main>
    <DomainsHolder
      :onSeeRanking="handleSeeRanking"
      @domainRemoved="handleDomainRemoved"
    />
    <div v-if="Object.keys(rankingData).length > 0">
      <DomainChart :data="rankingData" />
    </div>
    <div v-else class="noDomain">
      <p>
        🔍 Add some domains and hit "See Ranking" above to see the ranking
        chart!
      </p>
    </div>

    <div v-if="loading" class="loading-overlay">
      <div class="spinner-container d-flex gap-3 align-center">
        <div class="spinner-border text-primary" role="status"></div>
        <p>Fetching the ranking. This might take a few seconds.</p>
      </div>
    </div>
  </main>
</template>

<style>
main {
  max-width: 1000px;
  margin: 1rem auto;
}

.noDomain {
  text-align: center;
  margin-top: 2rem;
  color: #555;
  font-size: 1.1rem;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: all;
}

.spinner-container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
