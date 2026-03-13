const tdSchema = {

  type: "object",

  properties: {

    title: { type: "string" },

    properties: {
      type: "object"
    },

    actions: {
      type: "object"
    },

    events: {
      type: "object"
    }

  },

  required: ["title"]

};