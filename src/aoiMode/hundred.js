module.exports = (client) => {
    client.functionManager.createFunction({
      name: "$hundred",
      type: "djs",
      async code(d) {
      const data = d.util.aoiFunc(d);
      const [param1, param2] = data.inside.splits;
      function calculatePercentage(x, y) {
      return Math.round((x/y)*100);
      }
      
      let yuzde = calculatePercentage(param1, param2)
     data.result = yuzde
    return {
     code: d.util.setCode(data)
    };
      }
    });
    };