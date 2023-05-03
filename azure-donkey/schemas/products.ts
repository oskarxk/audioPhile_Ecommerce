export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'shortName',
      type: 'string',
      title: 'Short Name',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'description',
      type: 'string',
      title: 'Desription',
    },
    {
      name: 'feature1',
      type: 'string',
      title: 'Feature1',
    },
    {
      name: 'feature2',
      type: 'string',
      title: 'Feature2',
    },
    {
      "name": "contents",
      "type": "array",
      "of": [
        {
          "name": "content",
          "title": "Product",
          "type": "object",
          "fields": [
            {
              "name": "name",
              "title": "Name",
              "type": "string"
            },
            {
              "name": "quantity",
              "title": "Quantity",
              "type": "number"
            }
          ]
        }
      ]
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
      name: 'imageDesktop',
      title: 'image-desktop',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageTablet',
      title: 'image-tablet',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageMobile',
      title: 'image-mobile',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageCart',
      title: 'image-cart',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
