function makeDate() {
    const d = '1/19/2020';
    const date = d.split('/').reverse(); // 1, 19, 2020 -> 2020, 19, 1
    const middle = date[1];
    date.splice(1, 1);
    date.push(middle);
    console.log(date.join('.'));
}

makeDate();
