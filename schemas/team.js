// team
export default{
    name: "team",
    type:'document',
    title:"Team",
    fields:[
        {
            name: "id",
            type: "number",
            title:"ID member",
            validation: Rule => Rule.required().integer()
        },
        {
            name: "name",
            type: "string",
            title: "Member name"
        },
        {
            name: "description",
            type: "string",
            title: "Member description",
            validation: Rule => Rule.required().min(1).max(210)
        },
        {
            name: "image",
            type: "image",
            title: "Member image",
            fields:[
                {
                    name:"alt",
                    type:"string",
                    title:"Alternative Text"
                }
            ]
        },
        {
            name: "role",
            type: "string",
            title: "Member role",
            initialValue: 'baby',
            options:{
                list:[
                    {title: 'CEO', value: 'CEO'},
                    {title: 'Member', value: 'Member'},
                    {title: 'Developer', value: 'Developer'},
                ]
            }
        }
    ]
}