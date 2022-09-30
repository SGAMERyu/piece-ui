// vite.config.ts
import { resolve, join } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
import AutoImport from "unplugin-auto-import/vite";
import Pinceau from "pinceau/vite";
var __vite_injected_original_dirname = "C:\\Users\\qixiyu\\Desktop\\code\\piece-ui\\packages\\piece-ui";
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
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxxaXhpeXVcXFxcRGVza3RvcFxcXFxjb2RlXFxcXHBpZWNlLXVpXFxcXHBhY2thZ2VzXFxcXHBpZWNlLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxxaXhpeXVcXFxcRGVza3RvcFxcXFxjb2RlXFxcXHBpZWNlLXVpXFxcXHBhY2thZ2VzXFxcXHBpZWNlLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9xaXhpeXUvRGVza3RvcC9jb2RlL3BpZWNlLXVpL3BhY2thZ2VzL3BpZWNlLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgRHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBQaW5jZWF1IGZyb20gJ3BpbmNlYXUvdml0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIER0cygpLFxuICAgIERlZmluZU9wdGlvbnMoKSxcbiAgICBQaW5jZWF1KHtcbiAgICAgIGNvbmZpZ09yUGF0aHM6IGpvaW4oX19kaXJuYW1lLCAnc3R5bGUnKSxcbiAgICAgIGNvbmZpZ0ZpbGVOYW1lOiAndG9rZW5zLmNvbmZpZydcbiAgICB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGR0czogdHJ1ZSxcbiAgICAgIGltcG9ydHM6IFsndnVlJ11cbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ0AnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUpXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdQaWVjZVVJJ1xuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnlcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVXLFNBQVMsU0FBUyxZQUFZO0FBQ3JZLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBTnBCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLGNBQWM7QUFBQSxJQUNkLFFBQVE7QUFBQSxNQUNOLGVBQWUsS0FBSyxrQ0FBVyxPQUFPO0FBQUEsTUFDdEMsZ0JBQWdCO0FBQUEsSUFDbEIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsU0FBUyxDQUFDLEtBQUs7QUFBQSxJQUNqQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxnQ0FBUztBQUFBLE1BQ2hDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDcEMsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUdiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
