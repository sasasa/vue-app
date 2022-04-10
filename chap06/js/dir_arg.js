Vue
  .createApp({
    data() {
      return {
        color: 'red'
      };
    }
  })
  .directive('highlight', (el, binding) => {
    switch(binding.arg) {
      case 'bg':
        el.style.backgroundColor = binding.value;
        break;
      case 'border':
        el.style.borderStyle = 'solid';
        el.style.borderWidth = '1px';
        el.style.borderColor = binding.value;
        break;
      case 'text':
        el.style.fontWeight = 'bold';
        el.style.color = binding.value;
        break;
      default:
        throw new Error('指定のハイライトは使えません。');
    }
  })
  .mount('#app');