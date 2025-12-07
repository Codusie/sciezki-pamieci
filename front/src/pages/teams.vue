<template>
  <BaseLayout>
    <Header
      title="Ranking Drużyn"
      icon="pi pi-users"
    />
    <BaseLoading :is-loading="isLoading">
      <div v-if="sortedTeams" class="ranking-page">
        <div class="podium">
          <!-- 2nd Place -->
          <div v-if="sortedTeams[1]" class="podium-item place-2">
            <div class="content">
              <div class="avatar-wrapper">
                <div class="avatar" :style="{ borderColor: getTeamColor(sortedTeams[1].key) }">
                  <img
                    v-if="getTeamAvatar(sortedTeams[1].key)"
                    :src="getTeamAvatar(sortedTeams[1].key)"
                    :alt="getTeamName(sortedTeams[1].key)"
                  />
                  <div v-else class="placeholder" :style="{ backgroundColor: getTeamColor(sortedTeams[1].key) }">
                    {{ getInitials(sortedTeams[1].key) }}
                  </div>
                </div>
                <div class="badge" :style="{ background: getTeamColor(sortedTeams[1].key) }">2</div>
              </div>
              <div class="name">{{ getTeamName(sortedTeams[1].key) }}</div>
              <div class="score">{{ sortedTeams[1].visits }} pkt</div>
            </div>
            <div class="bar" :style="{ background: getTeamGradient(sortedTeams[1].key) }"></div>
          </div>

          <!-- 1st Place -->
          <div v-if="sortedTeams[0]" class="podium-item place-1">
            <div class="crown">👑</div>
            <div class="content">
              <div class="avatar-wrapper">
                <div class="avatar" :style="{ borderColor: getTeamColor(sortedTeams[0].key) }">
                  <img
                    v-if="getTeamAvatar(sortedTeams[0].key)"
                    :src="getTeamAvatar(sortedTeams[0].key)"
                    :alt="getTeamName(sortedTeams[0].key)"
                  />
                  <div v-else class="placeholder" :style="{ backgroundColor: getTeamColor(sortedTeams[0].key) }">
                    {{ getInitials(sortedTeams[0].key) }}
                  </div>
                </div>
                <div class="badge" :style="{ background: getTeamColor(sortedTeams[0].key) }">1</div>
              </div>
              <div class="name">{{ getTeamName(sortedTeams[0].key) }}</div>
              <div class="score">{{ sortedTeams[0].visits }} pkt</div>
            </div>
            <div class="bar" :style="{ background: getTeamGradient(sortedTeams[0].key) }"></div>
          </div>

          <!-- 3rd Place -->
          <div v-if="sortedTeams[2]" class="podium-item place-3">
            <div class="content">
              <div class="avatar-wrapper">
                <div class="avatar" :style="{ borderColor: getTeamColor(sortedTeams[2].key) }">
                  <img
                    v-if="getTeamAvatar(sortedTeams[2].key)"
                    :src="getTeamAvatar(sortedTeams[2].key)"
                    :alt="getTeamName(sortedTeams[2].key)"
                  />
                  <div v-else class="placeholder" :style="{ backgroundColor: getTeamColor(sortedTeams[2].key) }">
                    {{ getInitials(sortedTeams[2].key) }}
                  </div>
                </div>
                <div class="badge" :style="{ background: getTeamColor(sortedTeams[2].key) }">3</div>
              </div>
              <div class="name">{{ getTeamName(sortedTeams[2].key) }}</div>
              <div class="score">{{ sortedTeams[2].visits }} pkt</div>
            </div>
            <div class="bar" :style="{ background: getTeamGradient(sortedTeams[2].key) }"></div>
          </div>
        </div>
      </div>
    </BaseLoading>
  </BaseLayout>
</template>

<script setup lang="ts">
import { httpService } from '@/api'
import BaseLayout from '@/components/BaseLayout.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'
import { GUIDE_TO_COLOR_MAP } from '@/composables/useGuideColor'
import type { Team } from '@/schema'
import Header from '@/components/Header.vue'
import rejewski from '@/assets/images/rejewski.png'
import kazimierzWielki from '@/assets/images/kazimierz_wielki.png'
import twardowski from '@/assets/images/twardowski.png'

const TEAMS_DISPLAY = {
  rejewski: 'Rejewski',
  kazimierz_wielki: 'Kazimierz Wielki',
  twardowski: 'Pan Twardowski',
}

const { data, isLoading } = useQuery({
  queryKey: ['get-visits'],
  queryFn: async () => {
    const { data } = await httpService.GET('/teams')
    return data
  },
})

const sortedTeams = computed(() => {
  if (!data.value || !Array.isArray(data.value)) return []
  // Create a copy and sort
  return [...data.value].sort((a, b) => b.visits - a.visits)
})

const getTeamName = (key: string) => {
  return TEAMS_DISPLAY[key as keyof typeof TEAMS_DISPLAY] || key
}

const getTeamColor = (key: string) => {
  const colorName = GUIDE_TO_COLOR_MAP[key as Team]
  return `var(--p-${colorName}-500)`
}

const getTeamGradient = (key: string) => {
  const colorName = GUIDE_TO_COLOR_MAP[key as Team]
  return `linear-gradient(to bottom, var(--p-${colorName}-400), var(--p-${colorName}-600))`
}

const getInitials = (key: string) => {
  const name = getTeamName(key)
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const TEAM_AVATAR: Record<Team, string> = {
  rejewski,
  kazimierz_wielki: kazimierzWielki,
  twardowski,
}

const getTeamAvatar = (key: string) => TEAM_AVATAR[key as Team] || ''
</script>

<style lang="scss" scoped>
.ranking-page {
  padding: 2rem 1rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--p-surface-ground);
}

.podium {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: auto;
  padding-bottom: 2rem;
  height: 400px; /* Fixed height for the podium area */
}

.podium-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 120px;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Removed hover for mobile optimization */
  /* &:hover {
    transform: translateY(-5px);
  } */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: center;
}

.avatar-wrapper {
  position: relative;
  margin-bottom: 0.5rem;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid;
  overflow: hidden;
  background: var(--p-surface-0);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--p-shadow-2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 24px;
  height: 24px;
  background: var(--p-surface-900);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
  border: 2px solid var(--p-surface-0);
  box-shadow: var(--p-shadow-1);
}

.name {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 1.2;
}

.score {
  font-size: 1rem;
}

.bar {
  width: 100%;
  border-top-left-radius: var(--p-border-radius);
  border-top-right-radius: var(--p-border-radius);
  opacity: 0.9;
}

/* Specific styling for places */
.place-1 {
  z-index: 2;

  .avatar {
    width: 80px;
    height: 80px;
    border-width: 4px;
  }

  .bar {
    height: 160px;
  }

  .badge {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
}

.place-2 {
  .bar {
    height: 110px;
  }
}

.place-3 {
  .bar {
    height: 70px;
  }
}

.crown {
  font-size: 2.5rem;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%) rotate(5deg);
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

@keyframes float {
  0%, 100% { transform: translateX(-50%) rotate(5deg) translateY(0); }
  50% { transform: translateX(-50%) rotate(5deg) translateY(-5px); }
}

@media (min-width: 640px) {
  .ranking-page {
    max-width: 640px;
    margin: 0 auto;
  }
}
</style>
