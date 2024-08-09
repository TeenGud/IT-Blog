const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Boolean', value: 'boolean' },
    { title: 'Numberred', value: 'number' },
    { title: 'Quote', value: 'blockquote' },
]

const post = {
    name: 'post',
    type: 'document',
    title: 'Post',
    groups: [
        {
            name: 'content',
            title: 'Content'
        },
        {
            name: 'meta',
            title: 'Meta'
        }
    ],
    fields: [
        {   
            group: 'meta',
            name: 'meta_title',
            type: 'string',
            title: 'Meta title',
            validation: (rule: any) => rule.required().min(10).max(80)
        },
        {
            group: 'content',
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (rule: any) => rule.required().min(10).max(80)
        },
        {   
            group: 'content',
            name: 'publishedDate',
            type: 'date',
            title: 'Published Date',
            validation: (rule: any) => rule.required()
        },
        {   
            group: 'content',
            name: 'image',
            type: 'image',
            title: 'Image',
            validation: (rule: any) => rule.required(),
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
            {
                name: 'caption',
                type: 'string',
                title: 'Caption',
            },
            {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
            }
            ]
        },
        {   
            group: 'content',
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: (rule: any) => rule.required(),
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: string) => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 200)
            }
        },
        {   
            group: 'content',
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (rule: any) => rule.required()
        },
        {   
            group: 'content',
            title: 'Body content', 
            name: 'body',
            type: 'array', 
            of: [{type: 'block', styles: textEditorStyles}, {type: 'image'}],
            validation: (rule: any) => rule.required()
        }

    ]
}

export default post