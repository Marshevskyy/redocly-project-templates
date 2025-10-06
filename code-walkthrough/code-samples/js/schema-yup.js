// @chunk {"steps": ["create-schema"]}
const yup = require('yup');

const validationSchema = yup.object({
  username: yup
    .string()
    // @chunk {"when": {"advanced-validation": true}}
    // @chunk {"steps": ["adjust-validation-conditions", "error-messages"]}
    .min({{min-length}}, `Username must be at least {{min-length}} characters.`)
    .max({{max-length}}, `Username must be less than {{max-length}} characters.`)
    // @chunk-end
    .required('Username is required.')
    // @chunk-end
    // @chunk {"when": {"advanced-validation": false}}
    // @chunk {"steps": ["adjust-validation-conditions", "error-messages"]}
    .min({{min-length}})
    .max({{max-length}})
    // @chunk-end
    .required(),
    // @chunk-end
    // @chunk {"when": {"advanced-validation": true}, "steps": ["custom-rules"]}
    .matches(
      /^[a-zA-Z0-9_]+$/,
      // @chunk {"steps": [ "error-messages"]}
      'Username can only contain letters, numbers, and underscores.'
      // @chunk-end
    ),
    // @chunk-end
  email: yup
    .string()
    // @chunk {"steps": [ "error-messages"], "when": {"advanced-validation": true}}
    .email('Invalid email address.')
    .required('Email is required.')
    // @chunk-end
    // @chunk {"when": {"advanced-validation": false}}
    .email()
    .required()
    // @chunk-end
});

module.exports = validationSchema;
// @chunk-end