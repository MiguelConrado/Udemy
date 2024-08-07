function retornaHoras(data){
    if(data && ! (data instanceof Date)){   
        throw('Erro Desconhecido')
    }
    if(!data){
        data = new Date();
    } 
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',

        hour12:false
    })
}

try{
    const data = new Date('01-01-1970 12:12:12')
    const hora = retornaHoras(data)
    console.log(hora)
}catch(error){
    console.log(error)
}finally{
    console.log('tenha um bom dia')
}