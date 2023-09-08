async function getData(){
const data = await fetch("https://restcountries.com/v3.1/all")
const json = await data.json()
console.log(json)
namesList(json)
}
getData()
function namesList(json){
    for(var i=0;i<=json.length-1;i++){
        const addDiv = document.createElement('div')
        addDiv.style.display = "grid"
        addDiv.style.gridTemplateColumns = "33% 33% 34%"
        addDiv.style.gridTemplateRows = "50px 50px"
        addDiv.style.gridTemplateAreas = `"flaga nazwa nazwa" "flaga populacja stolica"`
        document.getElementById('d2').appendChild(addDiv)
        addDiv.id = "newDiv"

        const flaga = document.createElement('img')
        flaga.src = json[i].flags.png
        flaga.style.height = "100px"
        flaga.style.width = "100px"
        flaga.style.gridArea = "flaga"
        addDiv.appendChild(flaga)

        
        
        const nazwa = document.createElement('h2')
        nazwa.style.width = "200px"
        nazwa.style.height = "50px"
        nazwa.style.margin= "0px"
        nazwa.style.color = "black"
        nazwa.innerHTML = json[i].name.common
        nazwa.style.gridArea = "nazwa"
        addDiv.appendChild(nazwa)

        const pop = document.createElement('h2')
        pop.style.width = "100px"
        pop.style.height = "50px"
        pop.style.margin= "0px"
        pop.innerHTML = json[i].population
        pop.style.gridArea = "populacja"
        addDiv.appendChild(pop)

        const st = document.createElement('h2')
        st.style.width = "100px"
        st.style.height = "50px"
        st.style.margin= "0px"
        st.innerHTML = json[i].capital
        st.style.gridArea = "stolica"
        addDiv.appendChild(st)



    }
}