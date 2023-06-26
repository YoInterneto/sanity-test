import { defineField, defineType } from "sanity";

export default defineType({
    name: "component",
    title: "Component",
    type: "document",
    fields: [
        defineField({
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
        }),
        defineField({
            name: 'props',
            title: 'Props',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'nombre',
                            title: 'Nombre del prop',
                            type: 'string',
                        },
                        //TODO - Esto puede ser un desplegable con todos los tipos que haya
                        {
                            name: 'tipo',
                            title: 'Tipo del prop',
                            type: 'string',
                        },
                    ],
                },
            ],
        }),
    ],
});

