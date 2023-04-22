export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
      },
    },
    {
      "name": "categories",
      "type": "array",
      "of": [
        {
          "name": "category",
          "title": "Product",
          "type": "object",
          "fields": [
            {
              "name": "name",
              "title": "Name",
              "type": "string"
            },
            {
              "name": "description",
              "title": "Description",
              "type": "string"
            }
          ]
        }
      ]
    },
  ],
}
