// * ============ ASYNC / AWAIT ============ * \\
// ~~~~~ OLD WAY (PROMISES) ~~~~~ \\
// function getAllComments() {
//     fetch("url")
//     .then((res) => res.json())
//     .then((json) =>console.log(json))
//     .catch((err) => console.log("err:",err));
// }

// getAllComments();

// ~~~~~ NEW WAY (ASYNC/AWAIT) ~~~~~ \\
async function getAllComments() {
    try {
    const data = await fetch("url");
    const res = await data.json();
    console.log("res:", res);
    }
}

getAllComments();