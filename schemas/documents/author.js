export default {
  name: 'author',
  type: 'document',
  title: 'Contributor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'roles',
      type: 'array',
      title: 'Role',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Author', value: 'author' },
          { title: 'Photographer', value: 'photographer' },
          { title: 'Artist', value: 'artist' }
        ]
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'bio',
      type: 'bioPortableText',
      title: 'Biography'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
