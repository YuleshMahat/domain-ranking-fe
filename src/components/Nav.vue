<template>
  <header class="navbar">
    <div class="nav-content">
      <div class="logo-section">
        <div class="logo-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="chart-icon"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </div>
        <div class="text-group">
          <h1>DomainRank</h1>
          <p>Real-time visibility into search authority</p>
        </div>
      </div>
      <div class="status-badge"><span class="pulse"></span> Live Data</div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: #1a1f36; /* Deep navy to match the tags */
  color: white;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-icon {
  background: #5469d4; /* Indigo accent */
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.text-group h1 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.text-group p {
  margin: 0;
  font-size: 0.85rem;
  color: #a3acb9; /* Faded text */
}

/* Status Badge */
.status-badge {
  background: rgba(66, 184, 131, 0.1);
  color: #42b883;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(66, 184, 131, 0.2);
}

.pulse {
  width: 8px;
  height: 8px;
  background: #42b883;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(66, 184, 131, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(66, 184, 131, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(66, 184, 131, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(66, 184, 131, 0);
  }
}
</style>
