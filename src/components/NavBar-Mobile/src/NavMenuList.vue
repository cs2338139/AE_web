<script setup>
defineProps({
  keyName: String,
});
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openMenu() {
      let state = this.$refs.Menubutton.name;
      if (state === "add-outline") {
        this.$refs.Menu.style.display = "block";
        this.$refs.Menubutton.name = "remove-outline";
      } else {
        this.$refs.Menu.style.display = "none";
        this.$refs.Menubutton.name = "add-outline";
      }
    },
    CloseMenu() {
      this.$refs.Menu.style.display = "none";
      this.$refs.Menubutton.name = "add-outline";
    },
    EmitCloseMenuList() {
      this.$emitter.emit("CloseMenuList", this.$props.keyName);
    },
  },
  mounted() {
    this.$emitter.on("CloseMenuList", (msg) => {
      if (msg != this.keyName) {
        this.CloseMenu();
      } else {
        this.openMenu();
      }
    });
  },
};
</script>

<template>
  <li>
    <div @click="EmitCloseMenuList" class="relative flex items-center justify-between w-full h-10 font-bold bg-white border-b hover:text-slate-400">
      <div class="mx-5">
        <slot name="menuName"> </slot>
      </div>
      <div class="mx-5">
        <ion-icon ref="Menubutton" name="add-outline"></ion-icon>
      </div>
    </div>

    <ul class="p-0 mx-0 hidden" ref="Menu">
      <slot></slot>
    </ul>
  </li>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .dev-border-view {
    @apply border border-solid box-border;
  }
}

@layer utilities {
  .min-w-32 {
    min-width: 128px;
  }
}
</style>
