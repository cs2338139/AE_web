<script setup>
import ImageBox from "../ImageBox/ImageBox.vue";
import EventInfo from "./src/EventInfo.vue";
import EventTeacher from "./src/EventTeacher.vue";
import EventDate from "./src/EventDate.vue";
import EventPlace from "./src/EventPlace.vue";
import EventContact from "./src/EventContact.vue";
import EventLink from "./src/EventLink.vue";
import EventMeeting from "./src/EventMeeting.vue";
defineProps({
  img: Array,
  link: String,
  info: Array,
  teacherInfo: Array,
  needKnew: Boolean,
  needLink: Boolean,
  MExpect: Array,
  MProcess: Array,
  MTeacher: Array,
  howTo: String,
  place: String,
  target: String,
  money: String,
  tip: String,
  people: String,
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<template>
  <div class="grid mb-10 gap-x-16 gap-y-10 xl:gap-y-5 lg:gap-x-0">
    <div class="col-start-1 col-end-4 row-start-1 row-end-4 lg:col-end-1">
      <ImageBox :path="'Activities/' + $route.params.activityID + '/' + $route.params.eventID" :img="img" :time="3000" :auto="false" />
    </div>

    <div class="col-start-4 col-end-6 row-start-1 row-end-2 pt-10 2xl:pt-5 xl:pt-0 lg:col-start-1 lg:col-end-1 lg:row-start-4 lg:row-end-5 lg:pt-5 sm:pt-0">
      <EventDate>
        <template #date>
          <slot name="date"></slot>
        </template>
        <template #time>
          <slot name="time"></slot>
        </template>
      </EventDate>
    </div>

    <div class="col-start-4 col-end-6 row-start-2 row-end-3 lg:col-start-1 lg:col-end-1 lg:row-start-6 lg:row-end-7" id="place">
      <EventPlace :howTo="howTo" :place="place" :target="target" :money="money" :tip="tip" :people="people"></EventPlace>
    </div>

    <div class="col-start-4 col-end-6 row-start-3 row-end-4 lg:col-start-1 lg:col-end-1 lg:row-start-7 lg:row-end-8 lg:pt-5">
      <div class="mb-10 xl:mb-5 lg:mb-10">
        <EventLink :link="link" :needKnew="needKnew" :needLink="needLink" />
      </div>
      <EventContact></EventContact>
    </div>

    <div v-if="info != null" class="mt-8 xl:mt-4 col-start-1 col-end-4 row-start-4 row-end-6 xl:row-start-4 lg:col-end-1 lg:row-start-5 lg:row-end-6 lg:pt-5 sm:pt-0" id="info">
      <EventInfo :info="info">
        <template #title><slot name="title"></slot></template>
        <template #ref><slot name="ref"></slot></template>
      </EventInfo>
      <hr class="my-8 border border-zinc-400 lg:border-0 sm:my-3" />
      <EventTeacher :teacherInfo="teacherInfo">
        <slot name="teacher"></slot>
      </EventTeacher>
      <hr class="hidden my-8 border-zinc-400 lg:block sm:mb-2" />
    </div>

    <div v-else class="mt-8 xl:mt-4 col-start-1 col-end-4 row-start-4 row-end-6 xl:row-start-4 lg:col-end-1 lg:row-start-5 lg:row-end-6 lg:pt-5 sm:pt-0" id="info">
      <EventMeeting :MExpect="MExpect" :MProcess="MProcess" :MTeacher="MTeacher">
        <template #MTitle> <slot name="MTitle"></slot></template>
        <template #MTarget> <slot name="MTarget"></slot></template>
      </EventMeeting>
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
}
</style>
