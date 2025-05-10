const addItens = document.getElementById("getitem");
const button = document.getElementById("btn-add");
const ul = document.querySelector("ul");
const list = document.querySelector("li");
const li = document.getElementById("list");
const alertMessage = document.getElementById("alert");
const close = document.querySelector(".close")

// função para criar itens
button.addEventListener("click", () => {

    if (addItens.value.trim() === "") {
        return alert("Digite um item válido!");
    }

    // criando lista
    const li = document.createElement("li");
    ul.append(li);
    li.classList.add("listitens");
    li.classList.add("flex");
    
    // criando checked
    const checkedImg = document.createElement("div");
    const input = document.createElement("input");
    
    li.append(checkedImg);
    checkedImg.classList.add("checked-img");
    input.type = "checkbox";
    checkedImg.append(input);
    
    // criando texto
    const newText = document.createElement("p");
    const text = addItens.value;
    li.append(newText);
    newText.textContent = text;
    
    // criando o delete
    const btnDelete = document.createElement("button");
    const imgDelete = document.createElement("div");
    
    li.append(btnDelete);
    btnDelete.classList.add("btndelete");

    btnDelete.append(imgDelete);
    imgDelete.classList.add("img-delete");

    // limpando o input
    addItens.value = "";
});

// função para remover lista
ul.addEventListener("click", (event) => {
    if (event.target.closest(".btndelete")) {
        const item = event.target.closest(".listitens");
        item.remove();

        alertMessage.classList.remove("hidden");
    }

});

// função para remover a menssagem de error
close.addEventListener("click", () => {
    alertMessage.classList.add("hidden");
})
