import * as io from "https://deno.land/std@0.180.0/io/mod.ts";

import { gg } from "https://gist.githubusercontent.com/syrflover/43428606f107b77cf7dda7a68b16b0f3/raw/1ec5e586aebf416a88fdfbd98200550391f931ed/gg.ts";

// console.log(Deno.args);

const [content_id, code_number] = Deno.args.map((x) => parseInt(x, 10));

const r = await gg(content_id, code_number);

const buf = new io.Buffer(new TextEncoder().encode(JSON.stringify(r)));

Deno.stdout.write(buf.bytes());
