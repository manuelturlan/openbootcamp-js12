const logger = require('./logger')



function suma(num) {
    try {
       if (typeof num !== 'number') {
        throw new Error("Ingresa un dato correcto")
       } else {
        logger.info(`Se ha sumado exitosamente la suma ${num} + ${num}`)
       }
    } catch (err) {
        logger.error(`Failed in some way ${err}`)
    }
}

suma("asdsa")