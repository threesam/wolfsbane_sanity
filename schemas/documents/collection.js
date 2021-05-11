import { format } from 'date-fns'

export default {
    name: 'collection',
    type: 'document',
    title: 'Collection',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontends will require a slug to be set to be able to show the post',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            description: 'This can be used to schedule collection for publishing'
        },
        {
            name: 'cover',
            type: 'mainImage',
            title: 'Cover'
        },
        {
            name: 'excerpt',
            type: 'excerptPortableText',
            title: 'Excerpt',
            description: 'This ends up on summary pages, on Google, when people share your post in social media.'
        },
    ],
    orderings: [
        {
            name: 'publishingDateAsc',
            title: 'Publishing date new–>old',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'asc'
                },
                {
                    field: 'title',
                    direction: 'asc'
                }
            ]
        },
        {
            name: 'publishingDateDesc',
            title: 'Publishing date old->new',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'desc'
                },
                {
                    field: 'title',
                    direction: 'asc'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'publishedAt',
            media: 'cover'
        },
        // prepare({ title = 'No title', publishedAt, slug, media }) {
        //     const dateSegment = format(publishedAt, 'YYYY')
        //     const path = `/${dateSegment}/${slug.current}/`
        //     return {
        //         title,
        //         media,
        //         subtitle: publishedAt ? path : 'Missing publishing date'
        //     }
        // }
    }
}