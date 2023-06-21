function handler(name, payload, context) {

    console.log("Runtime Error Handler running ...")
    console.log("Name:", name);
    console.log("Payload:", payload);
    console.log("Context:", context);
    throw("Expected Error");
}
////////////////

handler(process.env.IN_NAME, JSON.parse(process.env.IN_PAYLOAD), JSON.parse(process.env.IN_CONTEXT));
