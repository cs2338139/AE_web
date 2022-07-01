<script setup>
defineProps({
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
    return {
      _howTo: [],
      _place: [],
      _target: [],
      _money: [],
      _tip: [],
      _people: [],
    };
  },
  computed: {
    Re() {
      if (this.howTo != null) this._howTo = this.howTo.split("｜");
      if (this.place != null) this._place = this.place.split("｜");
      if (this.target != null) this._target = this.target.split("｜");
      if (this.money != null) this._money = this.money.split("｜");
      if (this.tip != null) this._tip = this.tip.split("｜");
      if (this.people != null) this._people = this.people.split("｜");
    },
  },
  created() {
    this.Re;
  },
  updated() {
    this.Re;
  },
};
</script>
<template>
  <ul class="text-lg xl:text-sm text-zinc-600">
    <li class="my-2 flex" v-if="_howTo.length != 0">
      <div class="whitespace-nowrap">{{ _howTo[0] }}｜</div>
      <div class="">{{ _howTo[1] }}</div>
    </li>
    <li class="my-2 flex" v-if="_target.length != 0">
      <div class="whitespace-nowrap">{{ _target[0] }}｜</div>
      <div class="">{{ _target[1] }}</div>
    </li>
    <li class="my-2 flex" v-if="_people.length != 0">
      <div class="whitespace-nowrap">{{ _people[0] }}｜</div>
      <div class="">{{ _people[1] }}</div>
    </li>
    <li class="my-2 flex" v-if="_money.length != 0">
      <div class="whitespace-nowrap">{{ _money[0] }}｜</div>
      <div class="">{{ _money[1] }}</div>
    </li>
    <li class="my-2 flex" v-if="_place.length != 0">
      <div class="whitespace-nowrap">{{ _place[0] }}｜</div>
      <div class="">{{ _place[1] }}</div>
    </li>
    <li class="my-2 flex" v-if="_tip.length != 0">
      <div class="whitespace-nowrap">{{ _tip[0] }}｜</div>
      <div class="">{{ _tip[1] }}</div>
    </li>
  </ul>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
