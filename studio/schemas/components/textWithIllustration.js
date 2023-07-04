import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'textWithIllustration',
    type: 'object',
    title: 'Text with Illustration',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            type: 'string',
        }),
        defineField({
            name: 'copy',
            type: 'text',
        }),
        defineField({
            name: 'reversed',
            type: 'boolean',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }),
            ],
        }),
    ],
})