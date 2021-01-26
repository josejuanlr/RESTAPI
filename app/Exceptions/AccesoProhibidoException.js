'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccesoProhibidoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
handle ({response}){
  return response.status(403).json({
    error: 'Acceso No permitido a recurso'
  })
}
}

module.exports = AccesoProhibidoException
