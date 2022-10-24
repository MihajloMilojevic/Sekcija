const niz = [
    0, 1, 2, 3,
    "4", "5", "6",
    [7, "8"], ["9", 10],
    {11: 12, "13": 14}, {"15": {16: [17]}} 
];

for (const vr of niz) { // for(let i = 0; i < niz.length; i++)
    console.log(vr); // console.log(niz[i])
}