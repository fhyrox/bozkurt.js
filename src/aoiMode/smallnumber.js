module.exports = (client) => {
    client.functionManager.createFunction({
        name: "$smallNumber",
        type: "djs",
        code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [num] = data.inside.splits;
    
    let text1 = num.replaceAll("1", "¹");
    let text2 = text1.replaceAll("2", "²");
    let text3 = text2.replaceAll("3", "³");
    let text4 = text3.replaceAll("4", "⁴");
    let text5 = text4.replaceAll("5", "⁵");
    let text6 = text5.replaceAll("6", "⁶");
    let text7 = text6.replaceAll("7", "⁷");
    let text8 = text7.replaceAll("8", "⁸");
    let text9 = text8.replaceAll("9", "⁹");
    let text10 = text9.replaceAll("0", "⁰");
    
          data.result = text10
                return {code: d.util.setCode(data)};
        }
    });
    };
    