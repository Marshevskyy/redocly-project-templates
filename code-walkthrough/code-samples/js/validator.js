// @chunk {"steps": ["create-validator"]}
// @chunk {"when": {"validation": "Zod"}}
const validationSchema = require('./schema-zod');
// @chunk-end
// @chunk {"when": {"validation": "Yup"}}
const validationSchema = require('./schema-yup');
// @chunk-end

async function validateUser(data) {
  try {
    // @chunk {"when": {"validation": "Zod"}}
    const result = await validationSchema.parseAsync(data);
    // @chunk-end
    // @chunk {"when": {"validation": "Yup"}}
    const result = await validationSchema.validate(data);
    // @chunk-end

    return {
      isValid: true,
      data: result
    }
  } catch(error) {
    return {
      isValid: false,
      error: error.message
    }
  }
}

module.exports = validateUser
// @chunk-end