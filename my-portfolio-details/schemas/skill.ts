import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'title',
      description: 'Title of Skill',
      type: 'string',
    }),
    defineField({
      name: 'nameOfSkill',
      title: 'NameOfSkill',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    
  ],
})
