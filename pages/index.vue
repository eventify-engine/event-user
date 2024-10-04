<script setup lang="ts">
import type ConferenceResource from '~/resources/ConferenceResource';

const conference = useState<ConferenceResource | null>('conference');

const config = useRuntimeConfig();
</script>

<template>
    <UMain class="flex items-center justify-center h-dvh">
        <ULandingHero v-if="conference"
                      :title="conference.name"
                      description="Welcome to the conference!"/>

        <ULandingHero v-else
                      title="Whoops!"
                      description="There is no conference here, but..."
                      :links="[{
                          label: 'Create your own',
                          color: 'gray',
                          icon: 'i-heroicons-rocket-launch',
                          size: 'xl',
                          to: config.public.frontendUrl
                      }]"/>
    </UMain>
</template>

<style scoped>

</style>