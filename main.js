const mp_aggreg = [
    {
      name: "Abena Oppong-Asare",
      constituency: "Erith and Thamesmead",
      feb_20_jamaica: true,
      nov_20_jamaica: false,
      aug_21_zimbabwe: false,
      june_22_rwanda: false,
    },
    {
      name: "Afzal Khan",
      constituency: "Manchester Gorton",
      feb_20_jamaica: true,
      nov_20_jamaica: false,
      aug_21_zimbabwe: false,
      june_22_rwanda: false,
    }
];  


function findMP() {
    let s = $("#mp-name-selection").val();
    $('#loadresults').html('Loading'); 
    loadPrompt(s);
}

function findbyConstituency() {
    let s = $("#constituency-name-selection").val();
    let mp = mp_aggreg.find(mp => mp.constituency == s);
    console.log(mp.name);
    loadPrompt(mp.name);
}

function loadPrompt(name) {
    let i = 0; j = 0;
    let interval = setInterval(function() {
        $('#loadresults').append('.');
        i++;
        if (i == 4) {
            i = 0;
            $('#loadresults').html('Loading'); 
            j++;
            if (j == 3) {
                clearInterval(interval);
                $('#loadresults').html(''); 
                displayData(name);
                return;
            }
        }
    }, 500);
}


function displayData(val) {
    let mp = mp_aggreg.find(mp => mp.name == val);
    let output = '';
    console.log(mp.name + " | " + mp.constituency);
    let container = [`
    <p class="my-5 fs-2 fw-bold text-center">${mp.name} has tried to stop the boats before – here's how 👇</p>
    <ul>
      `, `
    </ul>
    <p class="fs-4 text-center">Share this online and make sure your friends know where ${mp.name} stands.</p>
    <p class="fs-3 my-3 text-uppercase text-center">Share This</p>
    `];

    const feb_20_jamaica_text = `
    <li class="mb-3 fs-5">In February 2020, ${mp.name} demanded a halt to a deportation flight which included murderers, drug traffickers, and convicted rapists.</li>
    `

    const nov_20_jamaica_text = `
    <li class="mb-3 fs-5">In November 2020, ${mp.name} fought to keep foreign criminals in Britain.</li>
    `

    const aug_21_zimbabwe_text = `
    <li class="mb-3 fs-5">In August 2021, ${mp.name} opposed our efforts to deport XX illegal immigrants home to Zimbabwe on social media. <a href="${mp.aug_21_link}">Take a look at what they had to say</a>.</li>
    `

    const june_22_rwanda_text = `
    <li class="mb-3 fs-5">In June 2022, ${mp.name} tried to block the removal of illegal immigrants to Rwanda for processing. They actively worked against our pledge to stop illegal immigration.</li>
    `

    let sharer = `
    <div class="container d-flex justify-content-center">
              <a href="https://www.facebook.com/conservatives/posts/754265932723354"><button type="button" class="btn bg-fb btn-lg fs-1 btn-floating">
                <i class="fab fa-facebook-f"></i>
              </button></a>
              <a href="mailto:?subject=Hey%20Friend%2C%20have%20you%20taken%20a%20look%20at%20this%20website%3F%20&body=Hey%20Friend%2C%0D%0A%0D%0AHave%20you%20taken%20a%20look%20at%20this%20website%3F%20Parliament's%20voting%20on%2025th%20April%20to%20stop%20the%20boats%20%26%20remove%20those%20entering%20the%20UK%20illegally.%20Let's%20help%20solve%20the%20crisis%20together%21%20%23StopTheBoats%20%F0%9F%93%A3%0D%0A%0D%0Ahttps%3A%2F%2Fwww.stoptheboats.co.uk%2F"><button type="button" class="btn bg-envelope fs-1 btn-lg btn-floating">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </button></a>
              <a href="https://api.whatsapp.com/send?text=Hey%20Friend%2C%20have%20you%20taken%20a%20look%20at%20this%20website%3F%20Parliament%27s%20voting%20on%2025th%20April%20to%20stop%20the%20boats%20%26%20remove%20those%20entering%20the%20UK%20illegally.%20Let%27s%20help%20solve%20the%20crisis%20together%21%20%23StopTheBoats%20%F0%9F%93%A3%0D%0A%0D%0Ahttps%3A%2F%2Fwww.stoptheboats.co.uk%2F"><button type="button" class="btn bg-wa btn-lg fs-1 btn-floating">
                <i class="fab fa-whatsapp"></i>
              </button></a>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.stoptheboats.co.uk%2F&text=Hey%20%40MP_Name%2C%20on%2025th%20April%20Parliament's%20voting%20to%20stop%20the%20boats%20%26%20remove%20those%20entering%20the%20UK%20illegally.%20Will%20you%20vote%20to%20solve%20the%20crisis%3F%20%23StopTheBoats%20%F0%9F%93%A3"><button type="button" class="btn bg-tw btn-lg fs-1 btn-floating">
                <i class="fab fa-twitter"></i>
              </button></a>
            </div>
    `
    if (mp.feb_20_jamaica || mp.nov_20_jamaica || mp.aug_21_zimbabwe || mp.june_22_rwanda) {
        output += container[0];
        if (mp.feb_20_jamaica) {
            output += feb_20_jamaica_text;
        }
        if (mp.nov_20_jamaica) {
            output += nov_20_jamaica_text;
        }
        if (mp.aug_21_zimbabwe) {
            output += aug_21_zimbabwe_text;
        }
        if (mp.june_22_rwanda) {
            output += june_22_rwanda_text;
        }
        output += container[1];
        output += sharer;
        $('#results').html(output);
    }
}

$("#mp-name-selection").on('change', function() {
$("#constituency-name-selection").val("");
});

$("#constituency-name-selection").on('change', function() {
$("#mp-name-selection").val("");
});

function autocomplete(inp, arr) {
/*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
closeAllLists();
let currentFocus;
inp.addEventListener( "input", function(e) {   /* when someone writes in the text field ... */
  let a, b, i, val = this.value;
  /*close any already open lists of autocompleted values*/
  closeAllLists();
  if (!val) { return false;}
  currentFocus = -1;
  /*create a DIV element that will contain the items (values):*/
  a = document.createElement("DIV");
  a.setAttribute("id", this.id + "autocomplete-list");
  a.setAttribute("class", "autocomplete-items");
  /*append the DIV element as a child of the autocomplete container:*/
  this.parentNode.appendChild(a);
  /*for each item in the array...*/
  for (i = 0; i < arr.length; i++) {
    /*check if the item starts with the same letters as the text field value:*/
    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
      /*create a DIV element for each matching element:*/
      b = document.createElement("DIV");
      /*make the matching letters bold:*/
      b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
      b.innerHTML += arr[i].substr(val.length);
      /*insert a input field that will hold the current array item's value:*/
      b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
      /*execute a function when someone clicks on the item value (DIV element):*/
      b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
      });
      a.appendChild(b);
    }
  }
});
/*execute a function presses a key on the keyboard:*/
inp.addEventListener("keydown", function(e) {
checkTheList(e); 
});

function checkTheList(e) {
  var x = document.getElementById(this.id + "autocomplete-list");
  if (x) x = x.getElementsByTagName("div");
  if (e.keyCode == 40) {
    /*If the arrow DOWN key is pressed,
    increase the currentFocus variable:*/
    currentFocus++;
    /*and and make the current item more visible:*/
    addActive(x);
  } else if (e.keyCode == 38) { //up
    /*If the arrow UP key is pressed,
    decrease the currentFocus variable:*/
    currentFocus--;
    /*and and make the current item more visible:*/
    addActive(x);
  } else if (e.keyCode == 13) {
    /*If the ENTER key is pressed, prevent the form from being submitted,*/
    e.preventDefault();
    if (currentFocus > -1) {
      /*and simulate a click on the "active" item:*/
      if (x) x[currentFocus].click();
    }
  }
}

function addActive(x) {
/*a function to classify an item as "active":*/
if (!x) return false;
/*start by removing the "active" class on all items:*/
removeActive(x);
if (currentFocus >= x.length) currentFocus = 0;
if (currentFocus < 0) currentFocus = (x.length - 1);
/*add class "autocomplete-active":*/
x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
/*a function to remove the "active" class from all autocomplete items:*/
for (var i = 0; i < x.length; i++) {
  x[i].classList.remove("autocomplete-active");
}
}
function closeAllLists(elmnt) {
/*close all autocomplete lists in the document,
except the one passed as an argument:*/
var x = document.getElementsByClassName("autocomplete-items");
for (var i = 0; i < x.length; i++) {
  if (elmnt != x[i] && elmnt != inp) {
    x[i].parentNode.removeChild(x[i]);
  }
}
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
  closeAllLists(e.target);
});
}

const mpList = [...new Set(mp_aggreg.map(a => a.name))];
const constList = [...new Set(mp_aggreg.map(a => a.constituency))];

autocomplete(document.getElementById("mp-name-selection"), mpList);
autocomplete(document.getElementById("constituency-name-selection"), constList);

function fullBreakdown(e) {
document.getElementById("fulldataresults").innerHTML = "";
let fulldatacol = "";
let total = 0;
for (let i = 0; i < mp_aggreg.length; i++) {
    if (mp_aggreg[i].name === e) {
      let m = (Math.round(mp_aggreg[i].amount * 100) / 100).toFixed(2);
        fulldatacol = `
          <tr id="fulldatacol-${i}">
            <td>${mp_aggreg[i].name}</td>
            <td>${mp_aggreg[i].donor_name}</td>
            <td class="text-end">£${m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          </tr>`;
        document.getElementById("fulldataresults").innerHTML += fulldatacol;
        total += mp_aggreg[i].amount * 100;
    }
}
document.getElementById("fulldataresults").innerHTML += `<tr id="total-row">
    <td><strong>TOTAL</strong></td>
    <td></td>
    <td class="text-end" style="font-weight:bold">£${(total / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
  </tr>`
};


function allDetails() {
let allDetails = "";
for (let i = 0; i < mp_aggreg.length; i++) {
        allDetails = `
          <tr id="allDetails-${i}">
            <td>${mp_aggreg[i].name}</td>
            <td>${mp_aggreg[i].constituency}</td>
          </tr>`;
        document.getElementById("allDetails").innerHTML += allDetails;
    }
};

// Dynamic keyword insertion

// This reads the URL to see if there is a param called 'lc', then if there is, checks its type. If it's a number, loop through mp_aggreg and find mp_aggreg[i].name and write it in the HTML element with ID mp_name.

const setName = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let lc = urlParams.get('lc');
  lc = parseInt(lc);
  if (lc && typeof lc === 'number' && mp_aggreg[lc].name !== undefined) {
    console.log(mp_aggreg[lc].name)
    document.getElementById('mp_name').innerHTML = mp_aggreg[lc].name;
  }
}

setName()