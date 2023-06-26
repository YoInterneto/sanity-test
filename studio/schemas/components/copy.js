import { defineField, defineType } from "sanity";
import component from "../component";

export default defineType({
	name: "copy",
	title: "Copy",
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
	],
});