// /schemas/post.js
import {TimezoneDatePicker} from '../components/TimezoneDatePicker'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'object',
      fields: [
        {
          name: 'raw',
          type: 'string',
        },
        {
          name: 'zoneName',
          type: 'string',
        },
        {
          name: 'iso',
          type: 'string',
        },
      ],
      //   description: 'All times in GMT (+00:00)',
      components: {
        input: TimezoneDatePicker,
      },
    },
    {
      name: 'datetime',
      title: 'Date time',
      type: 'datetime',
    },
  ],
}
