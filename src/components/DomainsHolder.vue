<script setup>
import { ref } from 'vue';

const emit = defineEmits(['domainRemoved']);

const domainInput = ref('');

const domains = ref([]);

const addDomain = () => {
  const name = domainInput.value.trim().toLowerCase();
  if (name && !domains.value.includes(name)) {
    domains.value.push(name);
    domainInput.value = '';
  }
};

const removeDomain = (index) => {
  const removed = domains.value.splice(index, 1);
  emit('domainRemoved', removed);
};

const props = defineProps({
  onSeeRanking: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="holder-container">
    <div class="cards-list">
      <div v-for="(domain, index) in domains" :key="domain" class="domain-card">
        <span>{{ domain }}</span>
        <button @click="removeDomain(index)" class="delete-btn">&times;</button>
      </div>
    </div>

    <div class="input-section">
      <input
        v-model="domainInput"
        @keyup.enter="addDomain"
        placeholder="Enter domain (e.g. google.com)"
      />
      <button @click="addDomain" class="btn-add">Add</button>
    </div>

    <button
      @click="() => props.onSeeRanking(domains)"
      class="rank-btn"
      :disabled="domains.length === 0"
    >
      See Ranking
    </button>
  </div>
</template>

<style scoped>
.holder-container {
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-height: 40px;
}

.domain-card {
  background: #f0f4f8;
  border: 1px solid #d1d9e0;
  padding: 4px 10px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.delete-btn {
  border: none;
  background: none;
  cursor: pointer;
  color: #ff4d4f;
  font-weight: bold;
}

.input-section {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.rank-btn {
  background-color: #42b883;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.rank-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-add {
  background: #f0f2f7; /* Light grey/blue background */
  border: 1px solid #e3e8ee;
  padding: 0 24px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #4f566b;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-add:hover {
  background: #e3e8ee;
  color: #1a1f36;
}

.btn-add:active {
  transform: scale(0.98);
}
</style>
