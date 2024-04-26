window.onload = function() {
        const quotes = [
// Albert Einstein
{
    text: '"A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo." — Albert Einstein',
    image: "../tarefashenry/images/einstein.jpg"
},
{
    text: '"O único homem que está isento de erros é aquele que não arrisca acertar." — Albert Einstein',
    image: "../tarefashenry/images/einstein.jpg"
},
{
    text: '"Não tentes ser bem-sucedido, tenta antes ser um homem de valor." — Albert Einstein',
    image: "../tarefashenry/images/einstein.jpg"
},
{
    text: '"Penso 99 vezes e nada descubro; deixo de pensar, mergulho em profundo silêncio - e eis que a verdade se me revela." — Albert Einstein',
    image: "../tarefashenry/images/einstein.jpg"
},
{
    text: "Só sei que nada sei. — Sócrates",
    image: "../tarefashenry/images/socrates.jpg"
},
{
    text: "A verdadeira sabedoria é saber que você não sabe nada. — Sócrates",
    image: "../tarefashenry/images/socrates.jpg"
},
// René Descartes
{
    text: '"Penso, logo existo." — René Descartes',
    image: "../tarefashenry/images/descartes.jpg"
},
{
    text: '"Se você seria um verdadeiro buscador da verdade, é necessário que duvide, tanto quanto possível, de todas as coisas." — René Descartes',
    image: "../tarefashenry/images/descartes.jpg"
},
{
    text: '"A leitura de todos os bons livros é como uma conversa com as melhores mentes dos séculos passados." — René Descartes',
    image: "../tarefashenry/images/descartes.jpg"
},
{
    text: '"A matemática é uma linguagem." — René Descartes',
    image: "../tarefashenry/images/descartes.jpg"
},
// Platão
{
    text: '"A necessidade é a mãe da invenção." — Platão',
    image: "../tarefashenry/images/platao.jpg"
},
{
    text: '"Sábio é aquele que conhece os limites da própria ignorância." — Platão',
    image: "../tarefashenry/images/platao.jpg"
},
{
    text: '"A música é um instrumento educacional mais poderoso do que qualquer outro." — Platão',
    image: "../tarefashenry/images/platao.jpg"
},
{
    text: '"A coisa mais importante que um pai pode fazer por seus filhos é respeitar a mãe deles." — Platão',
    image: "../tarefashenry/images/platao.jpg"
},
// Aristóteles
{
    text: '"O homem é por natureza um animal político." — Aristóteles',
    image: "../tarefashenry/images/aristoteles.jpg"
},
{
    text: '"A virtude é o justo meio entre dois vícios." — Aristóteles',
    image: "../tarefashenry/images/aristoteles.jpg"
},
{
    text: '"A amizade é uma alma que habita em dois corpos; um coração que habita em duas almas." — Aristóteles',
    image: "../tarefashenry/images/aristoteles.jpg"
},
{
    text: '"A educação tem raízes amargas, mas os frutos são doces." — Aristóteles',
    image: "../tarefashenry/images/aristoteles.jpg"
},
// Charles Darwin
{
    text: '"Não é o mais forte das espécies que sobrevive, nem o mais inteligente, mas o que melhor responde às mudanças." — Charles Darwin',
    image: "../tarefashenry/images/darwin.jpg"
},
{
    text: '"A dúvida, uma vez lançada sobre uma crença, se arrasta por um caminho muito longo." — Charles Darwin',
    image: "../tarefashenry/images/darwin.jpg"
},
{
    text: '"A história do homem é uma luta incessante, não tanto contra a natureza, mas contra seus semelhantes." — Charles Darwin',
    image: "../tarefashenry/images/darwin.jpg"
},
{
    text: '"A amizade é um instinto muito mais desenvolvido do que o amor." — Charles Darwin',
    image: "../tarefashenry/images/darwin.jpg"
},

// Sigmund Freud
{
    text: '"A voz da inteligência é suave, mas ela é insistente." — Sigmund Freud',
    image: "../tarefashenry/images/freud.jpg"
},
{
    text: '"Um dia, em retrospecto, os anos de luta parecerão os mais bonitos." — Sigmund Freud',
    image: "../tarefashenry/images/freud.jpg"
},
{
    text: '"O sonho é a satisfação de que o desejo se realize." — Sigmund Freud',
    image: "../tarefashenry/images/freud.jpg"
},
{
    text: '"Somos o que somos porque fomos o que fomos." — Sigmund Freud',
    image: "../tarefashenry/images/freud.jpg"
},

// Karl Marx
{
    text: '"Os filósofos têm apenas interpretado o mundo de maneiras diferentes; o ponto, porém, é mudá-lo." — Karl Marx',
    image: "../tarefashenry/images/marx.jpg"
},
{
    text: '"O trabalho não é a satisfação de uma necessidade, mas apenas um meio para satisfazer outras necessidades." — Karl Marx',
    image: "../tarefashenry/images/marx.jpg"
},
{
    text: '"A religião é o ópio do povo." — Karl Marx',
    image: "../tarefashenry/images/marx.jpg"
},
{
    text: '"A história de todas as sociedades que existiram até nossos dias é a história da luta de classes." — Karl Marx',
    image: "../tarefashenry/images/marx.jpg"
},
{
	text: '"A liberdade não é senão a capacidade de escolher as próprias cadeias." — John Locke',
	image: "../tarefashenry/images/locke.jpg"
},
{
    text: '"Onde não há lei, não há liberdade." — John Locke',
    image: "../tarefashenry/images/locke.jpg"
},
{
    text: '"As ações dos homens são os melhores intérpretes de seus pensamentos." — John Locke',
    image: "../tarefashenry/images/locke.jpg"
},
{
    text: '"O governo só tem um fim: o bem público." — John Locke',
    image: "../tarefashenry/images/locke.jpg"
},
{
    text: '"A beleza das coisas existe no espírito de quem as contempla." — David Hume',
    image: "../tarefashenry/images/hume.jpg"
},
{
    text: '"A razão é, e só deve ser, a escrava das paixões." — David Hume',
    image: "../tarefashenry/images/hume.jpg"
},
{
    text: '"A história humana é mais um registro das fraquezas dos homens do que de suas grandes qualidades e conquistas." — David Hume',
    image: "../tarefashenry/images/hume.jpg"
},
{
    text: '"É quando não estamos seguros que estamos mais vivos." — David Hume',
    image: "../tarefashenry/images/hume.jpg"
},
{
    text: '"Não se pode ensinar nada a um homem; só é possível ajudá-lo a encontrar a coisa dentro de si." — Galileu Galilei',
    image: "../tarefashenry/images/galileu.jpg"
},
{
    text: '"A matemática é o alfabeto com o qual Deus escreveu o universo." — Galileu Galilei',
    image: "../tarefashenry/images/galileu.jpg"
},
{
    text: '"Duvido, portanto penso; penso, logo existo." — Galileu Galilei',
    image: "../tarefashenry/images/galileu.jpg"
},
{
    text: '"Medir o que é mensurável e tornar mensurável o que não é." — Galileu Galilei',
    image: "../tarefashenry/images/galileu.jpg"
},
{
    text: '"A coisa mais difícil na vida é conhecer a si mesmo." — Tales de Mileto',
    image: "../tarefashenry/images/tales.jpg"
},
{
    text: '"Muitas palavras nunca indicam sabedoria." — Tales de Mileto',
    image: "../tarefashenry/images/tales.jpg"
},
{
    text: '"O prazer no trabalho aperfeiçoa a obra." — Tales de Mileto',
    image: "../tarefashenry/images/tales.jpg"
},
{
    text: '"A esperança é o único bem comum a todos os homens; aqueles que nada têm, ainda possuem esperança." — Tales de Mileto',
    image: "../tarefashenry/images/tales.jpg"
},
{
    text: '"A felicidade dos homens consiste na vida; e a vida está em seu coração e alma." — Demócrito',
    image: "../tarefashenry/images/democrito.jpg"
},
{
    text: '"Nada existe de grande senão o homem; e nada de grande no homem senão a mente." — Demócrito',
    image: "../tarefashenry/images/democrito.jpg"
},
{
    text: '"Só um homem sábio conhece seus próprios limites." — Demócrito',
    image: "../tarefashenry/images/democrito.jpg"
},
{
    text: '"A coragem nasce da reflexão, o medo da precipitação." — Demócrito',
    image: "../tarefashenry/images/democrito.jpg"
}

];
        const quoteElement = document.getElementById('quote');
        const imageElement = document.getElementById('quoteImage');
        const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerText = chosenQuote.text;
        imageElement.src = chosenQuote.image;
    };