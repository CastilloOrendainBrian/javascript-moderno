import { defineConfig } from "vite";

export default defineConfig({
    base: "/javascript-moderno/",
    plugins: [],
    define: {
        'process.env.BASE_URL': JSON.stringify('/javascript-moderno/')
    }
});