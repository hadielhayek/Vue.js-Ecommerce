<template>
     <landing />
     <Campaign />
     <Arrival />
     <Collab />
     <Feature />
     <thirdsect />
     <School />
     <Cfc />
     <Download />
     <Stores />
     <Footer />
</template>

<script setup lang="ts">
import School from "./components/b2school.vue";
import thirdsect from "./components/reels.vue";
import Footer from "./components/footer.vue";
import Download from "./components/getapp.vue";
import Stores from "./components/stores.vue";
import landing from "./components/landing.vue";
import Arrival from "./components/arrivals.vue";
import Campaign from "./components/campaign.vue";
import Cfc from "./components/funclub.vue";
import Collab from "./components/collab.vue";
import Feature from "./components/featured.vue";

import { split } from "./animations/split";
import { onMounted } from "vue";

onMounted(()=>{
     split();
})
</script>
