// vite.config.ts
import { resolve, join } from "path";
import { defineConfig } from "file:///C:/Users/qixiyu/Desktop/code/piece-ui/node_modules/.pnpm/vite@3.1.7/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/qixiyu/Desktop/code/piece-ui/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.1.7+vue@3.2.41/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Dts from "file:///C:/Users/qixiyu/Desktop/code/piece-ui/node_modules/.pnpm/vite-plugin-dts@1.6.6_vite@3.1.8/node_modules/vite-plugin-dts/dist/index.mjs";
import DefineOptions from "file:///C:/Users/qixiyu/Desktop/code/piece-ui/node_modules/.pnpm/unplugin-vue-define-options@0.11.2/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import AutoImport from "file:///C:/Users/qixiyu/Desktop/code/piece-ui/node_modules/.pnpm/unplugin-auto-import@0.11.3/node_modules/unplugin-auto-import/dist/vite.js";
import Pinceau from "file:///C:/Users/qixiyu/Desktop/code/piece-ui/node_modules/.pnpm/file+packages+piece-ui+.yalc+pinceau_postcss@8.4.18/node_modules/pinceau/dist/vite.mjs";
var __vite_injected_original_dirname = "C:\\Users\\qixiyu\\Desktop\\code\\piece-ui\\packages\\piece-ui";
var vite_config_default = defineConfig({
  logLevel: "info",
  plugins: [
    Pinceau({
      configOrPaths: join(__vite_injected_original_dirname, "style"),
      configFileName: "tokens.config"
    }),
    vue(),
    Dts(),
    DefineOptions(),
    AutoImport({
      dts: true,
      imports: ["vue"]
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__vite_injected_original_dirname)
      }
    ]
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "index.ts"),
      name: "PieceUI"
    },
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  histoire: {
    setupFile: "histoire.setup.ts"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxxaXhpeXVcXFxcRGVza3RvcFxcXFxjb2RlXFxcXHBpZWNlLXVpXFxcXHBhY2thZ2VzXFxcXHBpZWNlLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxxaXhpeXVcXFxcRGVza3RvcFxcXFxjb2RlXFxcXHBpZWNlLXVpXFxcXHBhY2thZ2VzXFxcXHBpZWNlLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9xaXhpeXUvRGVza3RvcC9jb2RlL3BpZWNlLXVpL3BhY2thZ2VzL3BpZWNlLXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJoaXN0b2lyZVwiIC8+XG5cbmltcG9ydCB7IHJlc29sdmUsIGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IER0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgRGVmaW5lT3B0aW9ucyBmcm9tICd1bnBsdWdpbi12dWUtZGVmaW5lLW9wdGlvbnMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgUGluY2VhdSBmcm9tICdwaW5jZWF1L3ZpdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGxvZ0xldmVsOiAnaW5mbycsXG4gIHBsdWdpbnM6IFtcbiAgICBQaW5jZWF1KHtcbiAgICAgIGNvbmZpZ09yUGF0aHM6IGpvaW4oX19kaXJuYW1lLCAnc3R5bGUnKSxcbiAgICAgIGNvbmZpZ0ZpbGVOYW1lOiAndG9rZW5zLmNvbmZpZycsXG4gICAgfSksXG4gICAgdnVlKCksXG4gICAgRHRzKCksXG4gICAgRGVmaW5lT3B0aW9ucygpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgZHRzOiB0cnVlLFxuICAgICAgaW1wb3J0czogWyd2dWUnXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiAnQCcsXG4gICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSlcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC50cycpLFxuICAgICAgbmFtZTogJ1BpZWNlVUknXG4gICAgfSxcbiAgICBjb21tb25qc09wdGlvbnM6IHtcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXG4gICAgICAvLyBpbnRvIHlvdXIgbGlicmFyeVxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaGlzdG9pcmU6IHtcbiAgICBzZXR1cEZpbGU6ICdoaXN0b2lyZS5zZXR1cC50cydcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLFNBQVMsWUFBWTtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQVJwQixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixVQUFVO0FBQUEsRUFDVixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixlQUFlLEtBQUssa0NBQVcsT0FBTztBQUFBLE1BQ3RDLGdCQUFnQjtBQUFBLElBQ2xCLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsZ0NBQVM7QUFBQSxNQUNoQztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3BDLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxpQkFBaUI7QUFBQSxNQUNmLHlCQUF5QjtBQUFBLElBQzNCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFHYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
