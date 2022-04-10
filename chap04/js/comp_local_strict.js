const MyChild = {
  template: `<div>こんにちは、Comp2！</div>`
};

// const MyParent = {
//   template: `
//     <div>こんにちは、Comp1！</div>
//     <my-child />
//   `
// };

const MyParent = {
  components: {
    'my-child': MyChild,
  },
  template: `
    <div>こんにちは、Comp1！</div>
    <my-child />
  `
};

Vue.createApp({
  components: {
    'my-parent': MyParent,
    'my-child': MyChild,
  }
}).mount('#app');