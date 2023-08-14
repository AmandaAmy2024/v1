process.env.TZ = 'Asia/Karachi';
import fs from 'fs';
import fetch from 'node-fetch';
let filePath = process.argv[2];
console.log({ filePath });
if (fs.existsSync(filePath)) {
    let data = fs.readFileSync(filePath, { encoding: "utf-8" });
    let urls = data.split("\n");
    console.log({ urls });
    urls.forEach(url => {
        fetch(url + "")
            .then((res) => {
            //console.log({ url, status: res.status });
            console.log("status: "+res.status+" url: "+url)
        })
            .catch((err) => {
//             console.log({ url, error: err.code });
            console.log("error: "+err.code+" url: "+url)
        });
    });
}
//# sourceMappingURL=processRequests.js.map
