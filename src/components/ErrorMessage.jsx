import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ErrorMessage ({FieldName, ErrorMessageText}) {
  return (
      <> 
      {ErrorMessageText != null &&
      <span className="error-message"><FontAwesomeIcon icon="fa-solid fa-circle-exclamation error-message" /> {FieldName && ErrorMessageText}</span>
      }
      </>
  ) 
}

export default ErrorMessage