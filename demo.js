// find add button
const addBtn = document.querySelector(".add-btn");

// find input name, input phone
const inputName = document.querySelector(".input-name")
const inputPhone = document.querySelector(".input-phone")

// find contact
const contact = document.querySelector(".contact")

// add on click to add button
addBtn.addEventListener('click', function(){
    // lay thong tin name va phone
    const name = inputName.value;
    const phone = inputPhone.value;
    

    // tao the div co class la user
    const divUser = document.createElement('div');
    divUser.classList.add('user');

    // tao the div co ten name2, gan noi dung la name
    const divName2 = document.createElement('div');
    divName2.classList.add('name2');
    divName2.innerHTML=name;

    // tao the div co ten phoneNumber, gan noi dung la phone
    const phoneNumber = document.createElement('div');
    phoneNumber.classList.add('phoneNumber');
    phoneNumber.innerHTML=phone;

    // them 2 the name va phone vao user
    divUser.appendChild(divName2)
    divUser.appendChild(phoneNumber)

    // add user to contact
    contact.appendChild(divUser);

    // sort
    const users = Array.from(contact.children);
    console.log(users);
    users.sort(function (a, b) {
        const name1 = a.firstChild.innerText;
        const name2 = b.firstChild.innerText;
        return name1.localeCompare(name2);
      })

    contact.innerHTML = '';
    users.forEach(user => contact.appendChild(user));
})