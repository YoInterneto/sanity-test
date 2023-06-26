import { defineField, defineType } from "sanity";
import component from "../component";

export default defineType({
	name: "hero",
	title: "Hero",
	type: "object",
	fields: [
        ...component.fields,
		defineField({
			name: "text",
			title: "Text",
			type: "string",
		}),
		defineField({
			name: "type",
			title: "Type",
			type: "string",
		}),
        defineField({
            name: "bgImage",
            title: "Background image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
	],
});

