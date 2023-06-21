function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function handler(name, payload, context) {

    console.log("Sleep Handler running ...")
    console.log("Name:", name);
    console.log("Payload:", payload);
    console.log("Context:", context);
    console.log("SLEEP NOW:", payload.seconds, "(sec)");
    sleep(payload.seconds*1000);
    console.log("Handler complete");
}


////////////////

handler(process.env.IN_NAME, JSON.parse(process.env.IN_PAYLOAD), JSON.parse(process.env.IN_CONTEXT));

