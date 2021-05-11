import S from '@sanity/desk-tool/structure-builder'

import { MdStar } from 'react-icons/all'

export default S.listItem()
  .title('Content')
  .schemaType('post')
  .icon(MdStar)
  .child(
    S.documentTypeList('post')
      .title('Content')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('post')
      )
  )
