    var entradaInput = " ";

    process.stdin.on('data', function (input) {
        entradaInput += input;
    });

    process.stdin.on('end', function () {
        var i;
        const resultado = entradaInput.trim().split('\n');
        const j = parseInt(resultado.shift(), 10);

        for (i = 0; i < j; i += 1) {

            const z = parseInt(resultado.shift());
            const a = resultado.shift().split(' ').map((z) => parseInt(z, 10));

            console.log(contaResolvida(a) ? 'YES' : 'NO');
        }
    });

    function contaResolvida(entradaInput) {
        let to = 0;
        let tp = entradaInput.reduce((b, a) => b + a, 0);
        let n = 0;

        if (entradaInput.length === 1) return true;

        for (let i = 0; i < entradaInput.length; i += 1) {
            if (tp === to)
                return true;

            to += n;
            n = entradaInput[i];
            tp -= n;
        }

        return false;
    };
