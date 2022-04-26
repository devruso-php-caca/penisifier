const CENTER = 50, HEAD_H = 5, BODY_H = 30, BODY_W = 26, BALLS_H = 10;
let data = "";

int = n => parseInt(n, 10);
s = n => (new Array(n)).join(" ");
print = chunk => console.log(`${s(CENTER - int(chunk.length / 2))}${chunk}`);

get_chunk = len => {
  // TODO: don't break words, use AST parser... not happening lol
  let tmp = data.substr(0, len);
  data = data.substr(len + 1, data.length);
  return tmp;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => data += chunk.replaceAll("\n", ""));
process.stdin.on('end', () => {
  let sw = 0;
  let required_len = 0;
  do {
    for(let i = 0; i < HEAD_H; i++) {
      let len = int(BODY_W / HEAD_H) * (i + 1);
      print(`${get_chunk(len)}`);
      !sw && (required_len += len);
    }

    for(let i = 0; i < BODY_H; i++) {
      print(`${get_chunk(BODY_W)}`);
      !sw && (required_len += BODY_W);
    }

    for(let i = 0; i < BALLS_H; i++) {
      let width = int(BODY_W * 0.8);
      print(`${get_chunk(width)}${s(int(BODY_W / 2))}${get_chunk(width)}`);
      !sw && (required_len += width + width);
    }
    sw = 1;
  } while(data.length > required_len);
  console.log(data); // not enough data for another penis
});