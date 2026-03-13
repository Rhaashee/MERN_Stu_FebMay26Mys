function invoice(gstRate = 0.18, ...items) {

    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {

        let item = items[i];

        // stop if item name is STOP
        if (item.name === "STOP") {
            break;
        }

        // skip invalid items
        if (item.price <= 0 || item.qty <= 0 || item.price === undefined || item.qty === undefined) {
            continue;
        }
        subtotal = subtotal + (item.price * item.qty);
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    return {
        subtotal: subtotal,
        gst: gst,
        total: total
    };
}
let result = invoice(
    0.18,
    {name: "Pen", price: 10, qty: 3},
    {name: "Book", price: 50, qty: 2},
    {name: "STOP"},
    {name: "Pencil", price: 5, qty: 5}
);

/Users/rhaasheelokesh/Desktop/ABC/MERN_ABC/MERN_Stu_FebMay26Mys/W3/D3/assignment2.js:38
console.log(Pen);
            ^

ReferenceError: Pen is not defined
    at Object.<anonymous> (/Users/rhaasheelokesh/Desktop/ABC/MERN_ABC/MERN_Stu_FebMay26Mys/W3/D3/assignment2.js:38:13)
    at Module._compile (node:internal/modules/cjs/loader:1706:14)
    at Object..js (node:internal/modules/cjs/loader:1839:10)
    at Module.load (node:internal/modules/cjs/loader:1441:32)
    at Function._load (node:internal/modules/cjs/loader:1263:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.19.0
