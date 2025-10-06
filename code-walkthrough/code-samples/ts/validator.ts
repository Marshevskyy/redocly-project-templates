// @chunk {"steps": ["create-validator"]}
// @chunk {"when": {"validation": "Zod"}}
import validationSchema from './schema-zod';
// @chunk-end
// @chunk {"when": {"validation": "Yup"}}
import validationSchema from './schema-yup';
// @chunk-end

async function validateUser(data: any) {
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
  } catch(error: any) {
    return {
      isValid: false,
      error: error.message
    }
  }
}

export default validateUser;
// @chunk-end 