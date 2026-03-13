require.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs"
  }
});

require(["vs/editor/editor.main"], function () {

  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({

    validate: true,

    schemas: [
      {
        uri: "http://td-schema.json",
        fileMatch: ["*"],
        schema: tdSchema
      }
    ]
  });

  window.editor = monaco.editor.create(
    document.getElementById("editor"),
    {
      value:"",
      language: "json",
      theme: "vs-dark",
      automaticLayout: true
    }
  );

  // autocomplete suggestions

  monaco.languages.registerCompletionItemProvider("json", {

    provideCompletionItems: function () {

      return {

        suggestions: [

          {
            label: "title",
            kind: monaco.languages.CompletionItemKind.Property,
            insertText: `"title": ""`
          },

          {
            label: "properties",
            kind: monaco.languages.CompletionItemKind.Property,
            insertText: `"properties": {}`
          },

          {
            label: "actions",
            kind: monaco.languages.CompletionItemKind.Property,
            insertText: `"actions": {}`
          },

          {
            label: "events",
            kind: monaco.languages.CompletionItemKind.Property,
            insertText: `"events": {}`
          }

        ]

      };

    }

  });

  editor.onDidChangeModelContent(() => {

    updatePreview();

  });

  updatePreview();

});

function updatePreview() {

  const preview = document.getElementById("previewContent");

  try {

    const data = JSON.parse(editor.getValue());

    let output = "";

    output += "Device: " + (data.title || "Unknown") + "\n\n";

    output += "Properties:\n";

    if (data.properties) {
      for (const key in data.properties) {
        const type = data.properties[key].type || "unknown";
        output += "• " + key + " (" + type + ")\n";
      }
    } else {
      output += "• none\n";
    }

    output += "\nActions:\n";

    if (data.actions) {
      for (const key in data.actions) {
        output += "• " + key + "\n";
      }
    } else {
      output += "• none\n";
    }

    output += "\nEvents:\n";

    if (data.events) {
      for (const key in data.events) {
        output += "• " + key + "\n";
      }
    } else {
      output += "• none\n";
    }

    preview.textContent = output;

  } catch (err) {

    preview.textContent = "Invalid JSON";

  }

}

function formatJSON() {

  editor.getAction("editor.action.formatDocument").run();

}

function setLight() {

  monaco.editor.setTheme("vs");

}

function setDark() {

  monaco.editor.setTheme("vs-dark");

}

function downloadJSON() {

  const content = editor.getValue();

  const blob = new Blob([content], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = "thing-description.json";

  a.click();

}