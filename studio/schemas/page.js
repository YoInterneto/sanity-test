import { defineArrayMember, defineField, defineType } from "sanity";

import CustomComponentInput from './inputs/CustomComponentInput';


export default defineType({
	name: "page",
	title: "Pages",
	type: "document",
	groups: [
		{
		name: 'seo',
		title: 'SEO',
	},
	{
		name: 'content',
		title: 'Content',
	},
	],
	fields: [
		defineField({
			name: "seoTitle",
			title: "SEO Title",
			type: "string",
			group: 'seo',
		}),
		defineField({
			name: "keywords",
			title: "Keywords",
			type: "string",
			group: 'seo',
		}),
		defineField({
			name: "seoImage",
			title: "SEO Image",
			type: "image",
			group: 'seo',
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "string",
			group: 'seo',
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			group: 'content',
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			group: 'content',
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
			group: 'content',
		}),
		defineField({
			name: 'body',
			title: 'Body (components)',
			type: 'array',
			group: 'content',
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
			],
		}),
	],
});
