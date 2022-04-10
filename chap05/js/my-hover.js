class MyHover extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const root = document.createElement('img');
    root.setAttribute('src', this.getAttribute('leave-src'));
    root.addEventListener('mouseenter', e => {
      root.setAttribute('src', this.getAttribute('enter-src'));
    });
    root.addEventListener('mouseleave', e => {
      root.setAttribute('src', this.getAttribute('leave-src'));
    });
    shadow.appendChild(root);
  }
}

// defineCustomElementメソッドを使った場合
// const MyHover = Vue.defineCustomElement({
//   data() {
//     return {
//       src: this.leaveSrc
//     };
//   },
//   props: {
//     leaveSrc: String,
//     enterSrc: String
//   },
//   methods: {
//     onenter() {
//       this.src = this.enterSrc;
//     },
//     onleave() {
//       this.src = this.leaveSrc;
//     },
//   },
//   template: `<img v-bind:src="src" v-on:mouseenter="onenter" v-on:mouseleave="onleave" />`,
// });

customElements.define('my-hover', MyHover);