<template>
  <div class="v-header">
      <v-logo/>
      <v-menu/>
      <div class="right_pannel">
        <v-bagicon/>
        <v-log/>
      </div>
  </div>
</template>

<script setup>
  import VMenu from '@/components/VMenu.vue';
  import VLogo from '@/components/VLogo.vue';
  import VBagicon from '@/components/VBagicon.vue';
  import VLog from '@/components/VLog.vue';
</script>

<style>
.v-header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

.right_pannel{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 210px;
}

</style>