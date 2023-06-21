var cars = [
  {
    id: 1,
    name: "Mazda", // parent
    models: [
      {
        id: 1,
        model: 2022,
        image: "./images/2022 Mazda CX-5 Signature.jpeg",
        name: "2022 Mazda CX-5 Signature",
        description:
          "The CX-5 Signature is Mazda's top-of-the-line trim level for this compact SUV. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 2,
        model: 2022,
        image: "./images/2022 Mazda CX-9 Signature.jpeg",
        name: "2022 Mazda CX-9 Signature",
        description:
          "The CX-9 Signature is Mazda's top-of-the-line trim level for this midsize SUV. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 3,
        model: 2022,
        image: "./images/2022 Mazda 3 Premium.png",
        name: "2022 Mazda 3 Premium",
        description:
          "The Mazda3 Premium is the top-of-the-line trim level for this compact car. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 4,
        model: 2022,
        image: "./images/2022 Mazda 6 Grand Touring.avif",
        name: "2022 Mazda 6 Grand Touring",
        description:
          "The Mazda6 Grand Touring is the top-of-the-line trim level for this midsize car. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
    ],
  },
  {
    name: "Toyota",
    models: [
      {
        id: 1,
        model: 2022,
        image: "./images/2022 Toyota Camry XSE.jpeg",
        name: "2022 Toyota Camry XSE",
        description:
          "The Camry XSE is the top-of-the-line trim level for this midsize car. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 2,
        model: 2022,
        image: "./images/2022 Toyota Corolla XSE.webp",
        name: "2022 Toyota Corolla XSE",
        description:
          "The Corolla XSE is the top-of-the-line trim level for this compact car. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 3,
        model: 2022,
        image: "./images/2022 Toyota RAV4 XSE Hybrid.jpeg",
        name: "2022 Toyota RAV4 XSE Hybrid",
        description:
          "The RAV4 XSE Hybrid is the top-of-the-line trim level for this compact SUV. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 4,
        model: 2022,
        image: "./images/2022 Toyota Sienna Platinum.jpeg",
        name: "2022 Toyota Sienna Platinum",
        description:
          "The Sienna Platinum is the top-of-the-line trim level for this minivan. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
    ],
  },
  {
    name: "Honda",
    models: [
      {
        id: 1,
        model: 2022,
        image: "./images/2022 Honda Accord Touring.jpeg",
        name: "2022 Honda Accord Touring",
        description:
          "The Accord Touring is the top-of-the-line trim level for this midsize car. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 2,
        model: 2022,
        image: "./images/2022 Honda Civic Touring.jpeg",
        name: "2022 Honda Civic Touring",
        description:
          "The Civic Touring is the top-of-the-line trim level for this compact car. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 3,
        model: 2022,
        image: "./images/2022 Honda CR-V Touring.jpeg",
        name: "2022 Honda CR-V Touring",
        description:
          "The CR-V Touring is the top-of-the-line trim level for this compact SUV. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
      {
        id: 4,
        model: 2022,
        image: "./images/2022 Honda Odyssey Elite.jpeg",
        name: "2022 Honda Odyssey Elite",
        description:
          "The Odyssey Elite is the top-of-the-line trim level for this minivan. It comes with a turbocharged engine, all-wheel drive, and a host of premium features.",
      },
    ],
  },
];

// كل مصفوفة تتكون من index و value

var htmls = ""; // for add html in this variable and then add to dropdown
var elements = []; // for add all elements in this array and then add event listener to each element

/**
 * @param {object} element // object of cars array
 * @param {number} key // index of cars array
 *
 */
cars.forEach((element, key) => {
  var items = "";

  /**
   * @param {object} model // object of models array
   * @param {number} index // index of models array
   */
  element.models.forEach((model, index) => {
    /**
     * This is html string use for add to dropdown
     * @param {string} items // html string
     */
    items += `<ol>
                    <li>
                        <a id="imglink${index}${key}" class="dropdown-item${index} " style="cursor: pointer;" >${model.name}</a>
                    </li>
                </ol>`;

    // add all element's index -parent- and key -child- to elements array
    elements.push({ key: key, index: index });
  });

  // add items string to htmls variable
  /**
   * name comes from cars array
   * @param {string} htmls // html string
   */
  htmls +=
    `  <li>
                    <a class="dropdown-item" style="width:auto !important" id="${element.name}" href = "#" >${element.name}</a>
                    <div class="div px-4" >
                        ` +
    items +
    `
                    </div>
                </li> `;
});

// get element by id
function getById(id) {
  return document.getElementById(id);
}

// toggle dropdown
function toggleDropdown() {
  models_dropdown_list.classList.toggle("show");
}

// show data after click on dropdown element
function showDataFromDropdown(element) {
  getById("headerImage").src = cars[element.key]?.models[element.index]?.image;
  getById("headerTitle").innerHTML =
    cars[element.key]?.models[element.index]?.name;
  getById("headerDescription").innerHTML =
    cars[element.key]?.models[element.index].description;
  console.log(element);
  toggleDropdown();
}

// get dropdown menu and add htmls to it
var models_dropdown_list = getById("model-dropdown-menu"); // get dropdown menu
models_dropdown_list.innerHTML = htmls; // add htmls to dropdown menu

// get all elements and add event listener to each element
var landing_section = getById("landing-section"); // get landing section line 64
var landing_section_image = getById("landing_section_image"); // get landing section image line 79
var landing_section_image_show = getById("landing_section_image_show"); // get landing section image line 81
var navbarDropdownMenuLink = getById("navbarDropdownMenuLink"); // get navbarDropdownMenuLink line 54 use for toggle dropdown menu

/**
 * this foreach loop for add event listener to each element
 * contains {key,index} key for parent index for child
 * use to konw which element clicked by id
 * @param {object} element // object of elements array
 */
elements.forEach((element) => {
  // get element by id and add event listener to it
  let link = document.getElementById(`imglink${element.index}${element.key}`); // get element by id 'imglink${index}${key}' line 95 in this file
  link.addEventListener("click", (e) => showDataFromDropdown(element));
});

// add event listener to navbarDropdownMenuLink
/**
 * when click on navbarDropdownMenuLink toggle dropdown menu
 */
navbarDropdownMenuLink.addEventListener("click", toggleDropdown);

// hide element
function hideElement(element) {
  element.classList.add("d-none");
}

// start typed animation
function startTyped(id = "#headerTitle") {
  new Typed(id, {
    typeSpeed: 20,
  });
}

// click outside dropdown menu
function clickOutsideDropdownMenu(e) {
  if (e.target.id !== "navbarDropdownMenuLink") {
    models_dropdown_list.classList.remove("show");
  }
}
// click outside dropdown menu
document.addEventListener("click", clickOutsideDropdownMenu);
