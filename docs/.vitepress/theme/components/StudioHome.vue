<script setup>
import { withBase } from 'vitepress'

const territories = [
  { n: '01', name: 'Dayform', theme: 'An everyday system', detail: 'For the person who wants getting dressed to take less thought.', label: 'Clarity / routine / ease', class: 'dayform' },
  { n: '02', name: 'Common Ground', theme: 'A creative common denominator', detail: 'For people who want a shared starting point for their own expression.', label: 'Participation / expression / belonging', class: 'common' },
  { n: '03', name: 'First Layer', theme: 'A new chapter starts here', detail: 'For the student or new graduate getting ready to show up somewhere new.', label: 'Reassurance / preparation / momentum', class: 'first' }
]
</script>

<template>
  <div class="studio-home">
    <div class="issue-line"><span>IS117 — FIELD NOTES / 001</span><span>RESEARCH & BRAND DIRECTION</span><span>05 NOV 2026</span></div>
    <section class="studio-hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="live-dot"></span> ONE PRODUCT. MANY POSSIBLE MEANINGS.</p>
        <h1 id="hero-title">A blank tee.<br>A <em>point of view.</em></h1>
        <p class="hero-intro">The shirt is the starting point. The brand is what we make of it.</p>
        <p class="hero-detail">A working research desk for our plain white T-shirt project: who’s already here, which ideas are worth exploring, and what we should make first.</p>
        <div class="hero-actions"><a class="studio-button primary" :href="withBase('/research/landscape.html')">Explore the landscape <span aria-hidden="true">↗</span></a><a class="text-link" :href="withBase('/strategy/recommendation.html')">Read our next move <span aria-hidden="true">→</span></a></div>
        <div class="hero-note"><span class="tiny-label">THE RULE</span><p>Same white T-shirt. Different audience, story, and design.<br><strong>Proposals to discuss. No brand chosen yet.</strong></p></div>
      </div>
      <div class="shirt-board">
        <div class="board-top"><span>OBJECT NO. 001</span><span>UNBRANDED ↙</span></div>
        <span class="registration top-left" aria-hidden="true">+</span><span class="registration bottom-right" aria-hidden="true">+</span>
        <img class="shirt-object" :src="withBase('/white-tee.svg')" alt="Illustration of the same plain, unbranded white T-shirt used across all proposed directions" width="560" height="580">
        <div class="object-sticker"><span>THE PRODUCT<br>STAYS THE SAME.</span><span aria-hidden="true">↗</span></div>
        <div class="board-bottom"><span>WHITE / PLAIN / POSSIBILITY</span><span>NOT A PRODUCT PHOTO</span></div>
      </div>
    </section>
    <section class="research-strip" aria-label="Research scope"><div><strong>08</strong><span>competitor examples<br>across four territories</span></div><div><strong>03</strong><span>proposed brand directions<br>ready to compare</span></div><div><strong>01</strong><span>recommended first experiment<br>to test with people</span></div><a :href="withBase('/research/sources.html')">Sources, not assumptions.<span aria-hidden="true">↗</span></a></section>
    <section class="home-section read-market" aria-labelledby="market-title">
      <div class="section-heading"><p class="eyebrow">01 / READ THE MARKET</p><h2 id="market-title">A crowded category.<br>A useful lesson.</h2></div>
      <div class="market-insight"><p class="big-insight">The basic is familiar.<br>The reasons to choose vary.</p><p>Value, premium essentials, responsibility, and cultural identity all have established examples. Our opening hypothesis: make the <em>wearing situation</em> specific, then make the page useful.</p><a class="text-link" :href="withBase('/research/landscape.html')">Compare promises and proof <span aria-hidden="true">→</span></a><p class="small-note">Editorial synthesis of the selected examples, not a market-share study.</p></div>
    </section>
    <section class="home-section territory-section" aria-labelledby="territory-title">
      <div class="territory-heading"><div><p class="eyebrow">02 / EXPLORE THE POSSIBILITIES</p><h2 id="territory-title">Three ways to mean something.</h2></div><p>Working names. Audience hypotheses.<br>One unchanged white T-shirt.</p></div>
      <div class="territory-grid"><a v-for="t in territories" :key="t.n" class="territory-card" :class="t.class" :href="withBase('/strategy/ideas.html')"><span class="territory-number">{{ t.n }} / PROPOSED TERRITORY <span aria-hidden="true">↗</span></span><h3>{{ t.name }}</h3><p class="territory-theme">{{ t.theme }}</p><p class="territory-detail">{{ t.detail }}</p><span class="territory-label">{{ t.label }}</span></a></div>
    </section>
    <section class="next-move" aria-labelledby="next-move-title"><div><p class="eyebrow">03 / OUR RECOMMENDATION</p><h2 id="next-move-title">Start with a moment.<br>Build for a person.</h2></div><div><span class="recommendation-tag">FIRST LAYER / PROVISIONAL LEAD</span><p>Explore a first creative club meeting, a studio session, a new informal setting. Test whether practical reassurance is a more useful promise than another claim about “the perfect tee.”</p><a class="studio-button light" :href="withBase('/strategy/recommendation.html')">Review the first experiment <span aria-hidden="true">↗</span></a></div></section>
    <div class="home-closing"><p>Keep the facts honest. Make the choices visible.</p><a :href="withBase('/project/roadmap.html')">See the build & review roadmap <span aria-hidden="true">→</span></a></div>
  </div>
</template>
