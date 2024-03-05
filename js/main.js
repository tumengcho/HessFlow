function Section(editor) {
  // Use the API: https://grapesjs.com/docs/api/

  editor.Blocks.add("section-block", {
    media:'<svg color viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M2 1.5C2 1.77614 1.77614 2 1.5 2C1.22386 2 1 1.77614 1 1.5C1 1.22386 1.22386 1 1.5 1C1.77614 1 2 1.22386 2 1.5ZM2 5L2 10H13V5H2ZM2 4C1.44772 4 1 4.44772 1 5V10C1 10.5523 1.44772 11 2 11H13C13.5523 11 14 10.5523 14 10V5C14 4.44772 13.5523 4 13 4H2ZM1.5 14C1.77614 14 2 13.7761 2 13.5C2 13.2239 1.77614 13 1.5 13C1.22386 13 1 13.2239 1 13.5C1 13.7761 1.22386 14 1.5 14ZM4 1.5C4 1.77614 3.77614 2 3.5 2C3.22386 2 3 1.77614 3 1.5C3 1.22386 3.22386 1 3.5 1C3.77614 1 4 1.22386 4 1.5ZM3.5 14C3.77614 14 4 13.7761 4 13.5C4 13.2239 3.77614 13 3.5 13C3.22386 13 3 13.2239 3 13.5C3 13.7761 3.22386 14 3.5 14ZM6 1.5C6 1.77614 5.77614 2 5.5 2C5.22386 2 5 1.77614 5 1.5C5 1.22386 5.22386 1 5.5 1C5.77614 1 6 1.22386 6 1.5ZM5.5 14C5.77614 14 6 13.7761 6 13.5C6 13.2239 5.77614 13 5.5 13C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14ZM8 1.5C8 1.77614 7.77614 2 7.5 2C7.22386 2 7 1.77614 7 1.5C7 1.22386 7.22386 1 7.5 1C7.77614 1 8 1.22386 8 1.5ZM7.5 14C7.77614 14 8 13.7761 8 13.5C8 13.2239 7.77614 13 7.5 13C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14ZM10 1.5C10 1.77614 9.77614 2 9.5 2C9.22386 2 9 1.77614 9 1.5C9 1.22386 9.22386 1 9.5 1C9.77614 1 10 1.22386 10 1.5ZM9.5 14C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13C9.22386 13 9 13.2239 9 13.5C9 13.7761 9.22386 14 9.5 14ZM12 1.5C12 1.77614 11.7761 2 11.5 2C11.2239 2 11 1.77614 11 1.5C11 1.22386 11.2239 1 11.5 1C11.7761 1 12 1.22386 12 1.5ZM11.5 14C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13C11.2239 13 11 13.2239 11 13.5C11 13.7761 11.2239 14 11.5 14ZM14 1.5C14 1.77614 13.7761 2 13.5 2C13.2239 2 13 1.77614 13 1.5C13 1.22386 13.2239 1 13.5 1C13.7761 1 14 1.22386 14 1.5ZM13.5 14C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14Z" fill="#ffffff" /> </svg>',
    label: "Section",
    content: {
      tagName:'section',
      editable: !1,
      droppable: 1,
      style: {
        height:'100vh',
      },
    },
    category: "Basic",
    
  });
}

var editor = grapesjs.init({
  modal: {
    custom:false,
    backdrop:true,
  },
  width: "auto",
  height:'100vh',
  container: "#editor",
  fromElement: true,
  selectorManager: { componentFirst: true },
  styleManager: {
    sectors: [
      {
        name: "General",
        properties: [
          {
            extend: "float",
            type: "radio",
            default: "none",
            options: [
              { value: "none", className: "fa fa-times" },
              { value: "left", className: "fa fa-align-left" },
              { value: "right", className: "fa fa-align-right" },
            ],
          },
          "display",
          { extend: "position", type: "select" },
          "top",
          "right",
          "left",
          "bottom",
        ],
      },
      {
        name: "Dimension",
        open: false,
        properties: [
          "width",
          {
            id: "flex-width",
            type: "integer",
            name: "Width",
            units: ["px", "%"],
            property: "flex-basis",
            toRequire: 1,
          },
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
        ],
      },
      {
        name: "Typography",
        open: false,
        properties: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          {
            extend: "text-align",
            options: [
              { id: "left", label: "Left", className: "fa fa-align-left" },
              {
                id: "center",
                label: "Center",
                className: "fa fa-align-center",
              },
              { id: "right", label: "Right", className: "fa fa-align-right" },
              {
                id: "justify",
                label: "Justify",
                className: "fa fa-align-justify",
              },
            ],
          },
          {
            property: "text-decoration",
            type: "radio",
            default: "none",
            options: [
              { id: "none", label: "None", className: "fa fa-times" },
              {
                id: "underline",
                label: "underline",
                className: "fa fa-underline",
              },
              {
                id: "line-through",
                label: "Line-through",
                className: "fa fa-strikethrough",
              },
            ],
          },
          "text-shadow",
        ],
      },
      {
        name: "Decorations",
        open: false,
        properties: [
          "opacity",
          "border-radius",
          "border",
          "box-shadow",
          "background", // { id: 'background-bg', property: 'background', type: 'bg' }
        ],
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["transition", "perspective", "transform"],
      },
      {
        name: "Flex",
        open: false,
        properties: [
          {
            name: "Flex Container",
            property: "display",
            type: "select",
            defaults: "block",
            list: [
              { value: "block", name: "Disable" },
              { value: "flex", name: "Enable" },
            ],
          },
          {
            name: "Flex Parent",
            property: "label-parent-flex",
            type: "integer",
          },
          {
            name: "Direction",
            property: "flex-direction",
            type: "radio",
            defaults: "row",
            list: [
              {
                value: "row",
                name: "Row",
                className: "icons-flex icon-dir-row",
                title: "Row",
              },
              {
                value: "row-reverse",
                name: "Row reverse",
                className: "icons-flex icon-dir-row-rev",
                title: "Row reverse",
              },
              {
                value: "column",
                name: "Column",
                title: "Column",
                className: "icons-flex icon-dir-col",
              },
              {
                value: "column-reverse",
                name: "Column reverse",
                title: "Column reverse",
                className: "icons-flex icon-dir-col-rev",
              },
            ],
          },
          {
            name: "Justify",
            property: "justify-content",
            type: "radio",
            defaults: "flex-start",
            list: [
              {
                value: "flex-start",
                className: "icons-flex icon-just-start",
                title: "Start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-just-end",
              },
              {
                value: "space-between",
                title: "Space between",
                className: "icons-flex icon-just-sp-bet",
              },
              {
                value: "space-around",
                title: "Space around",
                className: "icons-flex icon-just-sp-ar",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-just-sp-cent",
              },
            ],
          },
          {
            name: "Align",
            property: "align-items",
            type: "radio",
            defaults: "center",
            list: [
              {
                value: "flex-start",
                title: "Start",
                className: "icons-flex icon-al-start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-al-end",
              },
              {
                value: "stretch",
                title: "Stretch",
                className: "icons-flex icon-al-str",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-al-center",
              },
            ],
          },
          {
            name: "Flex Children",
            property: "label-parent-flex",
            type: "integer",
          },
          {
            name: "Order",
            property: "order",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Flex",
            property: "flex",
            type: "composite",
            properties: [
              {
                name: "Grow",
                property: "flex-grow",
                type: "integer",
                defaults: 0,
                min: 0,
              },
              {
                name: "Shrink",
                property: "flex-shrink",
                type: "integer",
                defaults: 0,
                min: 0,
              },
              {
                name: "Basis",
                property: "flex-basis",
                type: "integer",
                units: ["px", "%", ""],
                unit: "",
                defaults: "auto",
              },
            ],
          },
          {
            name: "Align",
            property: "align-self",
            type: "radio",
            defaults: "auto",
            list: [
              {
                value: "auto",
                name: "Auto",
              },
              {
                value: "flex-start",
                title: "Start",
                className: "icons-flex icon-al-start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-al-end",
              },
              {
                value: "stretch",
                title: "Stretch",
                className: "icons-flex icon-al-str",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-al-center",
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    "gjs-blocks-basic",
    "grapesjs-plugin-forms",
    "grapesjs-component-countdown",
    "grapesjs-plugin-export",
    "grapesjs-tabs",
    "grapesjs-custom-code",
    "grapesjs-touch",
    "grapesjs-parser-postcss",
    "grapesjs-tooltip",
    "grapesjs-tui-image-editor",
    "grapesjs-typed",
    "grapesjs-style-bg",
    "grapesjs-preset-webpage",
    Section,
  ],
  pluginsOpts: {
    "gjs-blocks-basic": { flexGrid: true },
    "grapesjs-tui-image-editor": {
      script: [
        // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
        "https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js",
        "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js",
        "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js",
      ],
      style: [
        "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css",
        "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css",
      ],
    },
    "grapesjs-tabs": {
      tabsBlock: { category: "Extra" },
    },
    "grapesjs-typed": {
      block: {
        category: "Extra",
        content: {
          type: "typed",
          "type-speed": 40,
          strings: ["Text row one", "Text row two", "Text row three"],
        },
      },
    },
    "grapesjs-preset-webpage": {
      modalImportTitle: "Import Template",
      modalImportLabel:
        '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
      modalImportContent: function (editor) {
        return editor.getHtml() + "<style>" + editor.getCss() + "</style>";
      },
    },
  },
});
const modal = editor.Modal;

editor.on("load",() => {
  document.querySelector(".gjs-block-categories").insertAdjacentHTML("afterbegin", '<button id="add-block">Add a new Block</Button>');
  document.getElementById("add-block").addEventListener("click",function(){
    modal.open({
      title: 'My title',
      content: 'My content',
      attributes: { class: 'my-class' },
    });
  })
 
  

})

