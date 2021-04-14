<template>
    <div>
      <ArticleTicket color="white" className="articleTicket--image_createAndShare" 
      classNameArticleTicket="articleTicket--principal">
        <template v-slot:title>Create and share your photo stories.</template>
        <template v-slot:paragraphe>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</template>
        <template v-slot:button>get an invite</template>
      </ArticleTicket>
      <ArticleTicket color="black" className="articleTicket--image_beautifulStories" 
      classNameArticleTicket="articleTicket--secondary">
        <template v-slot:title>Beautiful stories every time</template>
        <template v-slot:paragraphe>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</template>
        <template v-slot:button>view the stories</template>
      </ArticleTicket>
      <ArticleTicket color="black" className="articleTicket--image_designedForEveryone" 
      classNameArticleTicket="articleTicket--secondary">
        <template v-slot:title>Designed for everyone</template>
        <template v-slot:paragraphe>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.</template>
        <template v-slot:button>view the stories</template>
      </ArticleTicket>
 
    </div>

</template>

<script>
// @ is an alias to /src
import ArticleTicket from "./../components/home/ArticleTicket"

export default {
  name: 'Home',

  components: {
    ArticleTicket
  }
}
</script>

<style lang="scss" scoped>
 .home{

  }
</style>