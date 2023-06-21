function handler(name, payload, context) {

    console.log("Handler running ...")
    console.log("Name:", name);
    if ('spec' in context) {
        console.log('Spec:', context.spec.name);
    }
    console.log("Payload:", payload);
    console.log("Context:", context);
    if ('file' in payload) {
        var fileInput = JSON.parse(Buffer.from(payload.file, 'base64').toString());
        console.log("File:", fileInput)
    }
}

////////////////

handler(process.env.IN_NAME, JSON.parse(process.env.IN_PAYLOAD), JSON.parse(process.env.IN_CONTEXT));
