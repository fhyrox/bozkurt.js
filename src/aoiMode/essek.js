module.exports = (client) => {
    client.functionManager.createFunction({
        name: "$eşşek",
      type: "djs",
      code: (d) => {
            const data = d.util.aoiFunc(d);

            data.result = 'EŞŞEK.'
              return {code: d.util.setCode(data)};
      }
    })
    }; 