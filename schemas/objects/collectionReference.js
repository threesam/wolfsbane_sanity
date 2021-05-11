export default {
    name: 'collectionReference',
    type: 'object',
    title: 'Collection reference',
    fields: [
        {
            name: 'collection',
            type: 'reference',
            to: [
                {
                    type: 'collection'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'collection.title',
            media: 'collection.cover.asset'
        }
    }
}