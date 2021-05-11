import S from '@sanity/desk-tool/structure-builder'

import { MdPerson } from 'react-icons/all'


export default S.listItem()
  .title('Authors')
  .schemaType('author')
  .icon(MdPerson)
  .child(
    S.documentTypeList('author')
      .title('Authors')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('author')
      )
  )
