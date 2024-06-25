import { ref } from 'vue';

const showSidebar = ref();

export default function useLayout() {
  return {
    showSidebar
  };
}
