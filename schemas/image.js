// product
export default {
    name: "imageSite",
    type: 'document',
    title: "Image",
    groups: [
        {
            name: 'text',
            title: 'Text',
        },
    ],
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text"
                }
            ]
        },
        {
            title: 'Titre',
            name: 'titre',
            type: 'text',
            group: 'text'
        },
        {
            title: 'text',
            name: 'text',
            type: 'text',
            group: 'text'
        }
    ]

}