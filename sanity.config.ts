import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "xf389pey",
    dataset: 'production',
    title: 'IT Blog',
    apiVersion: "2024-08-07",
    basePath: "/admin",
    useCdn: true,
    token: 'skrbS2K7ddQOz4hFm3bRagValMewNN1FGj1TIwpI5dlqLjPu8xbdPezR0ywvpwhEpWA6fe4Q9DSVhI91qtgZ7x9Wtd6JaBawRQ6NAfFdDWIEpgYDouBXy4Q1E1BVmjIJk3RZONprOdmtOQLeQvjgqNwoa7fgRuhmvdBemGB43zYPi4PMqKSh',
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config;
