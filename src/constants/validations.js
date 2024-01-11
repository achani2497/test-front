export const Validations = {
    USERNAME: {
        required: 'Debe ingresar un nombre de usuario'
    },
    TEST_NAME: {
        required: 'Debe ingresar un nombre para el test',
        maxLength: {
            value: 30,
            message: 'El nombre del test no debe tener mas de 30 caractéres'
        }
    },
    PRIORITY: {
        required: 'Debe seleccionar una prioridad el test'
    },
    STATUS: {
        required: 'Es necesario que seleccione el status del test'
    }

}