// 1. Import utilities from `astro:content`
import { z, reference as ref, defineCollection } from 'astro:content'

// 2. Define your collection(s)
const functions = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        state: z.enum(["shared", "client", "server"]).default("shared"),
        description: z.string().default("No description provided"),
    })
})

const reference = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        func: ref("functions").optional(),
        arguments: z.array(z.object({
            name: z.string(),
            type: z.string(),
            description: z.string().optional(),
        })).optional(),
    })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { functions, reference }
