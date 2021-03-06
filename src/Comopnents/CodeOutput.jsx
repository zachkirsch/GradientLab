import React from 'react'
import chroma from 'chroma-js'

export default ({ store }) => (
  <div className="codeBlock">
    <code style={{ wordBreak: 'break-all' }}>
      {' '}
      {(() => {
        try {
          const result = eval(
            '((chroma, store) => {' + store.outputCode + '})'
          )(chroma, store).toString()
          return result
        } catch (err) {
          return err.toString()
        }
      })()}
    </code>
  </div>
)
