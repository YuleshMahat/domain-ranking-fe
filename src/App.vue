<script lang="ts" setup>
import { ref } from 'vue';
import DomainsHolder from './components/DomainsHolder.vue';
import Nav from './components/Nav.vue';
import type { RankingData, Rankings } from './types/api';
import { getRankings } from './features/domain/domainApi';
import DomainChart from './components/DomainChart.vue';

const rankingData = ref<RankingData>({});

const handleSeeRanking = async (domains: Rankings) => {
  const response = await getRankings(domains);
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
</style>
