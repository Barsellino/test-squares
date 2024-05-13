<template>
  <v-text-field
    v-model="innerValue"
    :error-messages="errorMessage"
    :type="type"
    @input="emit('update:modelValue', $event.target.value)"
    :label="label"
    :placeholder="placeholder"
  ></v-text-field>
</template>

<script setup>
import {defineProps, defineEmits, computed} from 'vue'

const props = defineProps({
  modelValue: {
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String
  },
  validator: {
    type: Object
  }
})
const emit = defineEmits(['update:modelValue'])
const innerValue = props.modelValue

const possibleErrors = ['required', 'email', 'minLength', 'maxLength', 'sameAs']

const errorMessage = computed(() => {
  if ( !props.validator?.$dirty) {
    return ''
  }
  for (const key in props.validator) {
    if (possibleErrors.includes(key) && props.validator[key].$invalid) {
      return props.validator[key].$message
    }
  }
  return ''
})

</script>

