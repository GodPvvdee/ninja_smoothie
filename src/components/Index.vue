<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="delete material-icons" @click="deleteSmoothie(smoothie.id)"
          >delete</i
        >
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredient">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>

      <span class="btn-floating btn-large halfway-fab pink">
        <router-link
          :to="{
            name: 'EditSmoothie',
            params: { smoothie_slug: smoothie.slug },
          }"
        >
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";
export default {
  name: "HelloWorld",
  data() {
    return {
      smoothies: [
        {
          title: "Ninja brew",
          slug: "ninja-brew",
          ingredients: ["icecream", "mostei", "алим"],
          id: "1",
        },
        {
          title: "Ninja brew2",
          slug: "ninja-brew2",
          ingredients: ["icecream", "mostei", "алим"],
          id: "2",
        },
        {
          title: "Ninja brew3",
          slug: "ninja-brew3",
          ingredients: ["icecream", "mostei", "алим"],
          id: "3",
        },
        {
          title: "Ninja brew4",
          slug: "ninja-brew4",
          ingredients: ["icecream", "mostei", "алим"],
          id: "4",
        },
      ],
    };
  },
  methods: {
    deleteSmoothie(id) {
      // filter function ashiglan id gaar n hailt hiin hevlene
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter((smoothie) => {
            return smoothie.id != id;
          });
        });
    },
  },
  // Achaallah uyed duudagdana
  created() {
    db.collection("smoothies")
      .get()
      .then((snapshot) => {
        snapshot.forEach((el) => {
          // console.log(el.data());
          let smoothie = el.data();
          smoothie.id = el.id;
          this.smoothies.push(smoothie);
        });
      })
      .catch();
  },
};
</script>
<style scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.ingredient {
  margin-top: 30px;
}
.ingredient li {
  display: inline-block;
}
.delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
