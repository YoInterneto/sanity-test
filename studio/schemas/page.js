import { defineArrayMember, defineField, defineType } from "sanity";

import CustomComponentInput from './inputs/CustomComponentInput';


export default defineType({
	name: "page",
	title: "Pages",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "theme",
			title: "Theme",
			type: "string",
		}),
		defineField({
			name: 'body',
			title: 'Body (components)',
			type: 'array',
			of: [
				defineArrayMember({
					name: 'hero',
					type: 'hero',
				}),
				defineArrayMember({
					name: 'textWithIllustration',
					type: 'textWithIllustration',
				}),
				defineArrayMember({
					name: 'gallery',
					type: 'gallery',
				}),
				defineArrayMember({
					name: 'form',
					type: 'form',
				}),
				defineArrayMember({
					name: 'video',
					type: 'video',
				}),
				defineArrayMember({
					name: 'callToAction',
					type: 'reference',
					to: [{ type: 'promotion' }],
				}),
			],
		}),
	],
});
