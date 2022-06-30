// Como podemos melhorar o esse código usando TS? 

type Humano = {
    nome?:String,
    idade?:Number | String,
    profissao?:String,
}

let pessoa1:Humano = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2:Humano = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3:Humano = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4:Humano = {
    nome : "carlos",
    idade : 19,
    profissao : "padeiro"
}