// @chunk {"steps": ["test-validation"]}
const validateUser = require('./validator.js');

const validUser = {
  username: '{{username}}',
  email: '{{email}}'
}

validateUser(validUser)
  .then(result => {
    if (result.isValid) {
      console.log('User is valid:', result.data)
    } else {
      console.log('User is invalid:', result.error)
    }
  })

// @chunk-end