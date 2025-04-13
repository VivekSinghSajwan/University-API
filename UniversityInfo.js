let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector('button');
let h3 = document.createElement('h3');
let ul = document.querySelector('ul');

async function api_call(country){
    try{
        let response = await fetch(url+country+"&limit=10");
        let data = await response.json();
        return data;
    }
    catch(error){
        console.error("API Error:", error);
        return [];
    }
}

btn.addEventListener('click',async () => {
    ul.innerHTML = ""; // Clean slate
    h3.innerHTML = ""; // Clear previous title

    let country = document.querySelector("input").value;
    document.querySelector('input').value = "";

    let colleges = await api_call(country);//console.log(typeof data);
    if(colleges.length == 0)
        ul.innerHTML = "<b>NO DATA AVAILABLE</b>"
    else{
        h3.innerHTML = `Universities of ${country.toUpperCase()}`;
        ul.insertAdjacentElement("beforebegin",h3); // Insert h3 before the ul
        colleges.forEach((college) => {
            console.log(college.name);
            let li = document.createElement('li');
            li.innerText = `${college.name}${college["state-province"] ? ", " + college["state-province"] : ""}`;
            ul.append(li);
        })
    }    
});



// let url = "http://universities.hipolabs.com/search?country=";
// let btn = document.querySelector('button');
// let h3 = document.createElement('h3');
// let p = document.createElement('p');

// async function api_call(country){
//     try{
//         let response = await fetch(url+country+"&limit=5");
//         let data = await response.json();
//         return data;
//     }
//     catch(error){
//         console.error("API Error:", error);
//         return [];
//     }
// }

// btn.addEventListener('click',async () => {
//     p.innerHTML = ""; // Clean slate
//     h3.innerHTML = ""; // Clear previous title

//     let country = document.querySelector("input").value;
//     document.querySelector('input').value = "";

//     let colleges = await api_call(country);//console.log(typeof data);
//     if(colleges.length == 0)
//         p.innerHTML = "<b>NO DATA AVAILABLE</b>"
//     else{
//         h3.innerHTML = `Top 5 Univeristies of ${country.toUpperCase()}`;
//         colleges.forEach((college) => {
//             console.log(college.name);
//             p.innerHTML += `<b>College Name: </b> ${college.name}<br><b>State Province: </b> ${college["state-province"]}<br><br>`;
//         })
//         document.body.append(h3);
//     }    
//     document.body.append(p);
// });

