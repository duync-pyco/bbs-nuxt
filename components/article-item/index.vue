<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Posted by {{ author }} - {{ email }}</p>
    <p>Updated at: {{ updatedAt }} - Views: {{ views }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true },
    email: { type: String, required: true },
    updatedAt: { type: String, required: true },
    views: { type: Number, required: true },
    content: { type: String, required: true }
  }
};
</script>

