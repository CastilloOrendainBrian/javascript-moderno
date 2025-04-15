import { defineConfig } from "vite";

export default defineConfig({
    base: "/javascript-moderno/",
    plugins: [],
    define: {
        'process.env.CARTS_URL': JSON.stringify('/javascript-moderno/assets/carts/')
    }
});