function attachShadow(root) {
    const templates = root.querySelectorAll("template[shadowroot]");
    for (const template of templates) {
        const mode = template.getAttribute("shadowroot");
        const shadowRoot = template.parentNode.attachShadow({ mode });
        shadowRoot.appendChild(template.content);
        template.remove();

        attachShadow(shadowRoot);
    }
}
attachShadow(document);
