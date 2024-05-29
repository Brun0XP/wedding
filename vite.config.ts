import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevtools from 'vite-plugin-vue-devtools';

import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    define: {
      'process.env': env
    },
    server: {
      port: 8080
    },
    plugins: [vue(), VueDevtools()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  });
};
