import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'dateEnded',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean'
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill'}}]
    }),
    defineField({
      name: 'summaries',
      title: 'Summaries',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ],
})
