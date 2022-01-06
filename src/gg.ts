export const gg = async (
    content_id: number,
    code_number: number
): Promise<{ m: number; b: string }> => {
    const res = await fetch("https://ltn.hitomi.la/gg.js", {
        headers: { Referer: `https://hitomi.la/reader/${content_id}.html` },
    });

    const gg_js = await res.text();

    const a = eval(`
    let gg = {};

    const document = {
        title: "Hitomi.la",
        location: {
            hostname: "hitomi.la"
        },
        documentElement: {
            clientHeight: 400
        }
    };

    ${gg_js}
    
    const ret = () => ({
        m: gg.m(${code_number}),
        b: gg.b
    })

    ret()
    `);

    // console.log(typeof a, a);

    return a;
};

// gg(2105173, 2828);
