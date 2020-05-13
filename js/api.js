// Three elements are in Global Scope inside a forEach function of country name
const search = document.querySelector("#position input");
const main = document.querySelector("main")
const grid = document.querySelector(".grid");
const cross = document.querySelector(".fa-times-circle");
const select = document.querySelector("select");
const back = document.querySelector("#back");
const secondPageGrid = document.querySelector("#secondPageGrid")
const thirdPage = document.querySelector("#thirdPage")
var div;


const all = async() =>{

    const base = "https://restcountries.eu/rest/v2/all";
    const response = await fetch(base);
    const data = await response.json();

    const image = data;
    return image;
}

all()
     .then((data) => {
        //  countryDetails(data);
        data.forEach(country => {
            name(country);
            pop(country);
            reg(country);
            cap(country);
            img(country);
            searchC();
            selectOption();
        })
        
     }).catch(err => console.log(err))
    
const img = async (country) =>{
    

        const flag = country.flag;
        const image = new Array();
        image.push(flag);
        
        image.forEach((imge) =>{
    
        var image = document.createElement("img");
        image.setAttribute("src",`${imge}`);
        image.setAttribute("alt","Country Flag")
    
        box.insertBefore(image,h2);
             })

   
    
}

const name = async (country) =>{

    window.box = document.createElement("div")   //// Global Scope
    box.setAttribute("class","box");
    grid.appendChild(box);

    const countryName =  country.name;
    const name = new Array();
    name.push(countryName);

    name.forEach(cName => {
    
    window.h2 = document.createElement("h2");    /// Global Scope
    h2.textContent = `${cName}`;
    box.appendChild(h2);
    })
    
        

}

const pop = async (country) =>{
    
        
        const population = country.population;
        const popu = new Array();
        popu.push(population);
        popu.forEach(population => {
    
        var h4 = document.createElement("h4");
        h4.textContent = `Population: `;
    
        box.appendChild (h4);
        
        var spanO = `${population}`
        spanO = Number(spanO);
        spanO = spanO.toLocaleString();

        var span = document.createElement("span");
        span.textContent = `${spanO}`;
        h4.appendChild(span);
        
             })

    
}

const reg = async (country) => {
    

        const region = country.region;
        const regi = new Array();
        regi.push(region);
        regi.forEach(region => {
    
        var h4 = document.createElement( "h4");
        h4.textContent = `Region: `;
        box.appendChild (h4);
    
        var span = document.createElement("span");
        span.textContent = `${region}`;
        h4.appendChild(span);
        })

  
    
}

// country capital
const cap = async (country) => {
    
    const capital = country.capital;
    const capi = new Array();
    capi.push(capital);
    capi.forEach(capital => {

    var h4 = document.createElement( "h4");
    h4.setAttribute("class","margin")
    h4.textContent = `Capital: `;
    box.appendChild (h4);

    var span = document.createElement("span");
    span.textContent = `${capital}`;
    h4.appendChild(span);

    var spanLink = document.createElement("span");
    spanLink.setAttribute("class","capital-mar");
    box.appendChild(spanLink);

    anchor = document.createElement("a");   ///Global 
    const anchorTextNode = document.createTextNode("Show Details ");
    anchor.appendChild(anchorTextNode);
    const i = document.createElement("i");
    i.setAttribute("class","fas fa-arrow-right");
    anchor.appendChild(i);
    spanLink.appendChild(anchor);

    const a = new Array();
    a.push(anchor);

    
    // Hover effect for Show Details
    box.addEventListener("mouseover",(e) =>{
        e.stopPropagation();
        a[0].style.display = "block"
    })

     box.addEventListener("mouseout",(e) =>{
        e.stopPropagation();
        a[0].style.display = "none";
    })

    })
    
   
   


    

     box.addEventListener("click",()=>{
       
        showMore(country);
        
        
        });
      
    
}

/// for 2nd page
const showMore = async (country) =>{

    console.log(country)

    main.style.display = "none";
    back.style.display = "block";
    secondPageGrid.style.display = "grid"

    // div before inside grid
    div = document.createElement("div");  //GLOBAL
    secondPageGrid.appendChild(div);

    // inside div for grid
    const insideGrid = document.createElement("div");
    insideGrid.setAttribute("class","insideGrid");
    div.appendChild(insideGrid);

    //CountryName
    const h2 = document.createElement("h2");
    h2.textContent = `${country.name}`;
    insideGrid.appendChild(h2);

    //Country Native Name
    const h4NativeName = document.createElement("h4");
    h4NativeName.textContent = "Native Name: ";
    insideGrid.appendChild(h4NativeName);
    const nativeNameSpan = document.createElement("span");
    nativeNameSpan.textContent = `${country.nativeName}`;
    h4NativeName.appendChild(nativeNameSpan);

     //Populationn
     const popu = document.createElement("h4");
     popu.textContent = "Population: ";
     insideGrid.appendChild(popu);
     var spanO = `${country.population}`
     spanO = Number(spanO);
     spanO = spanO.toLocaleString();
     const popuSpan = document.createElement("span");
     popuSpan.textContent = `${spanO}`;
     popu.appendChild(popuSpan);

      //region
      const region = document.createElement("h4");
      region.textContent = "Region: ";
      insideGrid.appendChild(region);
      const regionSpan = document.createElement("span");
      regionSpan.textContent = `${country.region}`;
      region.appendChild(regionSpan);

       // Sub Region
       const subRegion = document.createElement("h4");
       subRegion.textContent = "Sub Region: ";
       insideGrid.appendChild(subRegion);
       const subRegionSpan = document.createElement("span");
       subRegionSpan.textContent = `${country.subregion}`;
       subRegion.appendChild(subRegionSpan);

        // Capital
        const capital = document.createElement("h4");
        capital.textContent = "Capital: ";
        insideGrid.appendChild(capital);
        const capitalSpan = document.createElement("span");
        capitalSpan.textContent = `${country.capital}`;
        capital.appendChild(capitalSpan);

        //Top Level Domain
        const domain = document.createElement("h4");
        domain.textContent = "Top Level Domain: ";
        insideGrid.appendChild(domain);
        const domainSpan = document.createElement("span");
        domainSpan.textContent = `${country.topLevelDomain[0]}`;
        domain.appendChild(domainSpan);

        // Currencies
        const currency = document.createElement("h4");
        currency.textContent = "Currencies: "
        insideGrid.appendChild(currency);
        const currencySpan = document.createElement("span");
        currencySpan.textContent = `${country.currencies[0].name}`
        currency.appendChild(currencySpan)

        //Languages
        const language = document.createElement("h4");
        language.textContent = "Languages: ";
        insideGrid.appendChild(language);

        country.languages.forEach(lang =>{
            var languageSpan = document.createElement("span");
            languageSpan.textContent = `${lang.name}`;
            language.appendChild(languageSpan);
            if (country.languages.length < 3){
                languageSpan.textContent += `, `;
            }
        })

        //Flag
        const flag = document.createElement("img");
        flag.setAttribute("src",`${country.flag}`);
        flag.setAttribute("alt","Country Flag");
        secondPageGrid.insertBefore(flag,div);

        // BACK TO HOME
        back.addEventListener("click",()=>{
            main.style.display = "block";
            div.remove();
            flag.remove();
            back.style.display = "none";
        })

        // borders 
        const h3 = document.createElement("h3");
        h3.textContent = "Border Countries: ";
        div.appendChild(h3);
        if(country.borders.length === 0){
            h3.style.display = "none";
        }

        for(let index = country.borders.length; index--;){
            const code = country.borders[index];
            countryCode(code)
                .then(data => {
                    let borders = document.createElement("button");
                    borders.textContent = `${data.name}`;
                    h3.appendChild(borders);

                    const borderCountry = () =>{
                        borders.addEventListener("click",() =>{
                            console.log("Looking for: " + borders.textContent);

                            all().then(data =>{
                                data.forEach(country =>{
                                    if(country.name == borders.textContent){
                                        console.log(country);

                                        div.remove();
                                        flag.remove();

                                        showMore(country);
                                    }
                                })
                            }).catch(error => console.log(error))
                        })
                    }
                    borderCountry();
                }).catch(err => console.log(err));
        }
}

/// Searching Countries
const searchC = ()=>{
    heading2 = box;
    const boxer = document.querySelectorAll(".box");
    search.addEventListener("keyup", ()=>{
    let term = search.value.trim().toLowerCase();
        
        cross.style.display = "initial"
        cross.addEventListener("click", ()=>{
            search.value = "";
            Array.from(boxer).forEach(heading => {
                return heading.classList.remove("filtered")
            })
            cross.style.display ="none";   
        })
        
        search.addEventListener("blur", ()=>{
            if (search.value.length === 0){
                cross.style.display = "none";
            }
        })

        Array.from(boxer)
            .filter((heading)=>{
                // console.log(heading.firstChild.nextSibling.textContent)
              return  !heading.firstChild.nextSibling.textContent.toLowerCase().includes(term);
            }).forEach(heading =>{
                return heading.classList.add("filtered");
            })
        
        Array.from(boxer)
            .filter((heading)=>{
                // console.log(heading.firstChild.nextSibling.textContent)
              return  heading.firstChild.nextSibling.textContent.toLowerCase().includes(term);
            }).forEach(heading =>{
                return heading.classList.remove("filtered");
                
            })    
        
     })
    
}
///FILTER SELECTION STARTS HERE

const selectOption = ()=>{
    const boxer = document.querySelectorAll(".box");

    select.addEventListener("change",()=>{
        if(select.value == "1"){
            Array.from(boxer)
                .filter(region =>{
                  return !region.childNodes[3].lastChild.textContent.includes("Africa"); 
                }).forEach(region =>{
                    return region.classList.add("filtered");
                })
            Array.from(boxer)
                .filter(region =>{
                  return region.childNodes[3].lastChild.textContent.includes("Africa");  
                }).forEach(region =>{
                    return region.classList.remove("filtered");
                })
            

        } else if (select.value == "2"){
            Array.from(boxer)
                .filter(region =>{
                  return !region.childNodes[3].lastChild.textContent.includes("Americas"); 
                }).forEach(region =>{
                    return region.classList.add("filtered");
                })

            Array.from(boxer)
                .filter(region =>{
                  return region.childNodes[3].lastChild.textContent.includes("Americas"); 
                }).forEach(region =>{
                    return region.classList.remove("filtered");
                })
        } else if (select.value == "3"){
            Array.from(boxer)
                .filter(region =>{
                  return !region.childNodes[3].lastChild.textContent.includes("Asia"); 
                }).forEach(region =>{
                    return region.classList.add("filtered");
                })

            Array.from(boxer)
                .filter(region =>{
                  return region.childNodes[3].lastChild.textContent.includes("Asia"); 
                }).forEach(region =>{
                    return region.classList.remove("filtered");
                })
        } else if (select.value == "4"){
            Array.from(boxer)
                .filter(region =>{
                  return !region.childNodes[3].lastChild.textContent.includes("Europe"); 
                }).forEach(region =>{
                    return region.classList.add("filtered");
                })

            Array.from(boxer)
                .filter(region =>{
                  return region.childNodes[3].lastChild.textContent.includes("Europe"); 
                }).forEach(region =>{
                    return region.classList.remove("filtered");
                })
        } else if (select.value == "5"){
            Array.from(boxer)
                .filter(region =>{
                  return !region.childNodes[3].lastChild.textContent.includes("Oceania"); 
                }).forEach(region =>{
                    return region.classList.add("filtered");
                })

            Array.from(boxer)
                .filter(region =>{
                  return region.childNodes[3].lastChild.textContent.includes("Oceania"); 
                }).forEach(region =>{
                    return region.classList.remove("filtered");
                })
        } else{
            Array.from(boxer)
                .forEach(region => {
                    return region.classList.remove("filtered");
                })
        }
    })
}
/// FILTER SELECTION ENDS HERE

/// Dark Theme
const button = document.querySelector(".flex button")
const html = document.getElementsByTagName("html")[0];
let media = window.matchMedia("(prefers-color-scheme: dark)");
button.addEventListener("click",()=>{
    
    if( html.hasAttribute("data-theme") === false){
        html.setAttribute("data-theme","dark")
        document.querySelector(".fas").style.display = "initial";
    }else{
        html.removeAttribute("data-theme");
        document.querySelector(".fas").style.display = "none";
    }
})


/// BORDER COUNTRIES

const countryCode = async(code) =>{
    const base = "https://restcountries.eu/rest/v2/alpha/";
    const query = `${code}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
}