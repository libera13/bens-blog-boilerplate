<script>
export default {
  async asyncData(ctx) {
    const page = await ctx.$content(`blog/${ctx.params.slug}`).fetch()
    return {
      page
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.page.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return dateFormat.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<template>
  <main>
    <article class="content">
      <p class="blog-publish-date">{{ formatPublishDate }}</p>
      <h1 class="blog-title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </main>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

.blog-publish-date {
  @apply mt-12;
  font-family: $ff-sans;
}

.blog-title {
  font-family: $ff-sans;
  color: $c-navy;
  @apply font-bold;
  @apply text-5xl;
  @apply mb-4;
}

.content {
  @apply mx-auto;
  @apply px-8;
  max-width: 740px;
}

.nuxt-content {
  a {
    color: $c-primary;

    &:hover {
      text-decoration: underline;
    }
  }

  h1,
  h2 {
    font-family: $ff-sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.299664px;
    color: #2599e2;
    @apply mb-2;

    &:nth-child(n + 2) {
      @apply mt-8;
    }
  }

  h1 {
    font-size: 32px;
  }

  h3 {
    font-family: $ff-sans;
    @apply font-bold;
    @apply text-xl;
    @apply mt-3;
    @apply mb-2;
  }

  ul {
    @apply mt-3 mb-3 ml-6;
    @apply list-disc;
    font-family: PT Serif;
    @apply text-lg;
  }

  li {
    line-height: 1.6;
  }

  p {
    font-family: PT Serif;
    @apply text-lg;
  }
}
</style>
