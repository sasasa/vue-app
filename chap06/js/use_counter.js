const useCounter = function(init) {
  const current = Vue.ref(init);
  const onclick = () => {
    current.value++;
  };
  return {
    current,
    onclick
  };
};