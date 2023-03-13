const inputPromt = require("../model/input-model")
const openai = require("../config/openai")

module.exports = {
    async sendText(request, response){
        const openiAI = openai.configuration();
        const inputModel = new inputPromt(request.body);
        try {
            const response = await openiAI.createCompletion(openai.textCompletion(inputModel))
            return response.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return response.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : "Erro no servidor"
            })  
        }
    }
}