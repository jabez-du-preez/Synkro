import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: "classic",
		}),
	],
	build: {
		sourcemap: true,
		minify: true,
	},
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			assets: "/src/assets",
			pages: "/src/pages",
			views: "/src/views",
			styles: "/src/styles",
			themes: "/src/themes",
			store: "/src/store",
			reducers: "/src/reducers",
			helpers: "/src/helpers",
			actions: "/src/actions",
		},
	},
});
