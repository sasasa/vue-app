import { ref } from 'vue'

export default function(init) {
    const current = ref(init);
    const onclick = () =>  {
      current.value++
    }

    return {
      current,
      onclick
    }
}