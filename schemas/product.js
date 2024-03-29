// product
export default{
    name: "product",
    type:'document',
    title:"Product",
    fields:[
        {
            name: "id",
            type: "number",
            title:"ID member",
            validation: Rule => Rule.required().integer()
        },
        {
            name: "title",
            type: "string",
            title: "Title of product"
        },
        {
            name: "description",
            type: "string",
            title: "Description of product"
        },
        {
            name: "image",
            type: "image",
            title: "Image of product",
            fields:[
                {
                    name:"alt",
                    type:"string",
                    title:"Alternative Text"
                }
            ]
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options:{
                source:"title"
            }
        },
        {
            name: "new",
            type: "boolean",
            title: "New Product ?"
        },
        {
            name: "price",
            type: "number",
            title: "Price of product"
        },
        {
            name: "stripeUrl",
            type: "string",
            title: "StripeUrl for buy product"
        },
    ]
}