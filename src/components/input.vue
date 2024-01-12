<template>
  <div class="flex">
    <input
      :type="type"
      :label="label"
      :placeholder="placeholder"
      :variant="variant"
      :minlength="minlength"
      :class="class"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type?: string;
  label?: string;
  placeholder?: string;
  variant?: string;
  minlength?: string;
  class?: string;
  modelValue?: string;
}>();
</script>
