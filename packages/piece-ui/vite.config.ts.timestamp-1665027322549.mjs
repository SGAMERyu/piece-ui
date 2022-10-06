// vite.config.ts
import { resolve, join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pinceau from "pinceau/vite";
var __vite_injected_original_dirname = "C:\\Users\\qixiyu\\Desktop\\piece-ui\\packages\\piece-ui";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Dts(),
    DefineOptions(),
    Pinceau({
      configOrPaths: join(__vite_injected_original_dirname, "style"),
      configFileName: "tokens.config"
    }),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxxaXhpeXVcXFxcRGVza3RvcFxcXFxwaWVjZS11aVxcXFxwYWNrYWdlc1xcXFxwaWVjZS11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccWl4aXl1XFxcXERlc2t0b3BcXFxccGllY2UtdWlcXFxccGFja2FnZXNcXFxccGllY2UtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3FpeGl5dS9EZXNrdG9wL3BpZWNlLXVpL3BhY2thZ2VzL3BpZWNlLXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJoaXN0b2lyZVwiIC8+XHJcblxyXG5pbXBvcnQgeyByZXNvbHZlLCBqb2luIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBEdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgRGVmaW5lT3B0aW9ucyBmcm9tICd1bnBsdWdpbi12dWUtZGVmaW5lLW9wdGlvbnMvdml0ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IFBpbmNlYXUgZnJvbSAncGluY2VhdS92aXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIER0cygpLFxyXG4gICAgRGVmaW5lT3B0aW9ucygpLFxyXG4gICAgUGluY2VhdSh7XHJcbiAgICAgIGNvbmZpZ09yUGF0aHM6IGpvaW4oX19kaXJuYW1lLCAnc3R5bGUnKSxcclxuICAgICAgY29uZmlnRmlsZU5hbWU6ICd0b2tlbnMuY29uZmlnJ1xyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgZHRzOiB0cnVlLFxyXG4gICAgICBpbXBvcnRzOiBbJ3Z1ZSddXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbmQ6ICdAJyxcclxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUpXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ1BpZWNlVUknXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXHJcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XHJcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICB2dWU6ICdWdWUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBoaXN0b2lyZToge1xyXG4gICAgc2V0dXBGaWxlOiAnaGlzdG9pcmUuc2V0dXAudHMnXHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxTQUFTLFlBQVk7QUFDOUIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7QUFScEIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osY0FBYztBQUFBLElBQ2QsUUFBUTtBQUFBLE1BQ04sZUFBZSxLQUFLLGtDQUFXLE9BQU87QUFBQSxNQUN0QyxnQkFBZ0I7QUFBQSxJQUNsQixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxTQUFTLENBQUMsS0FBSztBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxRQUFRLGdDQUFTO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUNwQyxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BR2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ2I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
