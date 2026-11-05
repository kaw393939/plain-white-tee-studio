<script setup>
import { computed, ref } from 'vue'
import { competitors } from '../competitors'
const segment = ref('All')
const query = ref('')
const segments = ['All', 'Value', 'Premium', 'Responsibility', 'Culture']
const filtered = computed(() => competitors.filter(c => (segment.value === 'All' || c.segment === segment.value) && `${c.brand} ${c.product} ${c.promise} ${c.lesson}`.toLowerCase().includes(query.value.toLowerCase().trim())))
function reset() { segment.value = 'All'; query.value = '' }
</script>

<template>
  <section class="competitor-explorer" aria-labelledby="explorer-title">
    <h2 id="explorer-title">Explore the examples</h2>
    <p>Filter by the main story each example tells. These groups are editorial judgments; brands can span more than one.</p>
    <div class="explorer-controls"><label class="research-search">Find a brand or idea<input v-model="query" type="search" placeholder="Try fit, value, community…"></label><fieldset class="segment-filters"><legend>Brand territory</legend><div><button v-for="s in segments" :key="s" :aria-pressed="segment === s" :class="{ active: segment === s }" @click="segment = s">{{ s }}</button></div></fieldset></div>
    <p class="results-count" role="status" aria-live="polite">Showing {{ filtered.length }} of {{ competitors.length }} examples · reviewed November 5, 2026</p>
    <div class="competitor-list"><article v-for="c in filtered" :key="c.id" class="competitor-row"><div class="competitor-identity"><span class="segment-label">{{ c.segment }}</span><h3>{{ c.brand }}</h3><p>{{ c.product }}</p><strong class="competitor-price">{{ c.priceLabel }}</strong><p class="price-note">{{ c.priceNote }}</p></div><div class="competitor-analysis"><dl><div><dt>The story</dt><dd>{{ c.promise }}</dd></div><div><dt>Visible support</dt><dd>{{ c.evidence }}</dd></div><div><dt>What we can learn</dt><dd>{{ c.lesson }}</dd></div></dl><a :href="c.url" target="_blank" rel="noopener noreferrer">Read the product source <span aria-hidden="true">↗</span><span class="visually-hidden"> (opens in a new tab)</span></a></div></article></div>
    <div v-if="!filtered.length" class="empty-state"><p>No examples match these filters.</p><button class="studio-button primary" @click="reset">Reset filters</button></div>
  </section>
</template>
