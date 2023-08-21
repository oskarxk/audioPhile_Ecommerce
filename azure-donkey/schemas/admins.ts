export default {
  name: 'admins',
  type: 'document',
  title: 'Admins',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'userName',
      type: 'string',
      title: 'User Name',
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
    },
    {
      name: 'adminPhoto',
      title: 'Admin Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
