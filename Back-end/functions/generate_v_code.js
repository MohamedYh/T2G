export function v_code_generator() {
    const chrs = "0123456789abcdefghijklmnopqrstuvwxyz";

    var s = "";
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * parseInt(chrs.length);
        s += chrs[parseInt(x)];
    }
    return s;
}
