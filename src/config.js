// Arquivo para configurações que sejam úteis para o projeto como um todo
// Por exemplo variáveis de ambiente
// Funções de uso global

// Definiando a URL das apis conforme os ambientes
// dev/localhost, hml ou prod
let definirUrlAPIsConformeAmbinete = () => {
    let environment = process.env.NODE_ENV
    
    //Nesta variável srerão definidos as urls
    //das APIs conforme o ambiente da aplicação

    //Configurar o estado inicial com os endereços de DEV
    let APIs = {
        'appseguros'  : 'https://appsegurosgatewaydev.azure-api.net/',
    }

    /**
        Subistituindo os endereços das APIs conforme os ambientes
        Estou utilizando o environment como base. Cada ambiente
        Dev/localhost, hml, e prod possui um environment diferente
        que deverá ser considerado.

        Estou utilizando o spread operator para subistituir ou
        adicionar novos valores.
    */
    switch(environment) {
        case 'development':
            return {
                ...APIs, 
                'appseguros'  : 'https://appsegurosgatewaydev.azure-api.net/'
            }
            break
        case 'hml':
            return {
                ...APIs, 
                'appseguros'  : 'https://gateway-hml.zim.com.vc/'
            }
            break
        case 'production':
            return {
                ...APIs, 
                'appseguros'  : 'https://gateway.zim.com.vc/'
            }
            break
        default:
            return {
                ...APIs, 
                'appseguros'  : 'https://appsegurosgatewaydev.azure-api.net/'
            }
            break
    }
}

export const urlAPIs = definirUrlAPIsConformeAmbinete()

//Pegando o token na url
let getParamToken = () => {    
    let url = new URL(window.location.href)
    
    if(url.searchParams.get("token") != null){
		return url.searchParams.get("token")
	}else{
        return 'tokenTeste'
    }
} 
export const token = getParamToken()


//Pegando o idPedido na url
let getParamIdPedido = () => {    
    let url = new URL(window.location.href)
    
    if(url.searchParams.get("idPedido") != null){
		return url.searchParams.get("idPedido")
	}else{
        return 'idPedidoTeste'
    }
} 
export const idPedido = getParamIdPedido()

