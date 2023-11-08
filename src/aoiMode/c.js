module.exports = (bot) => {
    bot.functionManager.createFunction({
    name: "$c",
    type: "djs",
    async code(d) {
    const data = d.util.aoiFunc(d),
    [inside] = data.inside.splits;
    if (!inside) return d.aoiError.fnError(d, 'custom', {}, 'Missing inside');
    
    return {
    
    code: d.util.setCode(data)
    
    }
    
    }
    
    });
    };
