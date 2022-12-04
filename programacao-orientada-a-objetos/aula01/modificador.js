function fnCapitalizar(colecao, attr){
    if (colecao.length > 0) {
        if (typeof colecao[0] == 'object' && attr) {
            colecao.map(item => item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1));
        }else {
            colecao.map(item => item = item.charAt(0).toUpperCase() + item.slice(1));
        }
        
        return colecao;
    }
}

function fnCaixaAlta(colecao, attr){
    if (colecao.length > 0) {
        if (typeof colecao[0] == 'object' && attr) {
            colecao.map(item => item[attr] = item[attr].toUpperCase());
        }else {
            colecao.map(item => item = item.toUpperCase());
        }
        
        return colecao;
    }
}

function fnOrdenar(colecao, attr){    
    return attr ?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ? a[attr] - b[attr] : a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a == 'number' ? a - b : a.localeCompare(b)
        });
}

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};