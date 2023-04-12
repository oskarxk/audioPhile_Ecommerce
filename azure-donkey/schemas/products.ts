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
  ],
}
