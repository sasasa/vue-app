const tagin = {
  tags: [ 'tag', 'strategy' ]
};

const app = Vue.createApp({})
  .component('my-comp', {
    tags: [ 'component', 'sample' ],
    template: `<div>{{$options.tags}}</div>`,
    mixins: [ tagin ],
  });
app.config.optionMergeStrategies.tags = (toVal = [], fromVal = []) => {
  return fromVal.concat(toVal);
};
app.mount('#app');
