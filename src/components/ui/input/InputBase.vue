<template>
  <input
    :value="modelValue"
    :class="cn('flex h-8 w-full rounded-md border border-input bg-background px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    @input="onInput"
    @change="$emit('change', <InputEvent>$event)"
  >
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/tailwind'

const props = defineProps<{
  modelValue?: string | number | null
  class?: HTMLAttributes['class']
}>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
  change: [value: InputEvent]
}>()

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
