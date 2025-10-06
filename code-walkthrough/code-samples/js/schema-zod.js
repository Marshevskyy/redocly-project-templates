// @chunk {"steps": ["create-schema"]}
const { z } = require('zod');

const validationSchema = z.object({
  username: z
    .string()
    // @chunk {"steps": ["adjust-validation-conditions", "error-messages"]}
    // @chunk {"when": {"advanced-validation": true}}
    .min({{min-length}}, `Username must be at least {{min-length}} characters.`)
    .max({{max-length}}, `Username must be less than {{max-length}} characters.`)
    // @chunk-end
    // @chunk {"when": {"advanced-validation": false}}
    .min({{min-length}})
    .max({{max-length}}),
    // @chunk-end
    // @chunk-end
    // @chunk {"when": {"advanced-validation": true}, "steps": ["custom-rules"]}
    .regex(
      /^[a-zA-Z0-9_]+$/,
      // @chunk {"steps": [ "error-messages"]}
      'Username can only contain letters, numbers, and underscores.'
      // @chunk-end
    ),
    // @chunk-end
  // @chunk {"steps": [ "error-messages"], "when": {"advanced-validation": true}}
  email: z.string().email('Invalid email address.'),
  // @chunk-end
  // @chunk {"when": {"advanced-validation": false}}
  email: z.string().email(),
  // @chunk-end
});

module.exports = validationSchema;
// @chunk-end