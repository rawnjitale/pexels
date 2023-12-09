// vite.config.js

import reactIconsMd from 'react-icons/md';

export default {
  build: {
    rollupOptions: {
      external: [reactIconsMd],
    },
  },
};
