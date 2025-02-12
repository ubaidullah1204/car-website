const cars = {
    Honda: {
        Civic: {
            Name: "Civic",
            Year: 2025,
            Color: "Red",
            Price: 25000,
            picture: "https://th.bing.com/th/id/OIP.ZBskFVw-_EWqdp8F995zVQHaEK?rs=1&pid=ImgDetMain"

        },
        Accord: {
            Name: "Accord",
            Year: 2025,
            Color: "Blue",
            Price: 28000,
            picture: "https://th.bing.com/th/id/OIP.YFI8cLyptsTHMlHIU8Ec9gHaFj?rs=1&pid=ImgDetMain"
        },
        CRV: {
            Name: "CR-V",
            Year: 2025,
            Color: "Black",
            Price: 32000,
            picture: "https://th.bing.com/th/id/OIP.jmDe_5kFv4y_P-2VGTaByQHaE8?rs=1&pid=ImgDetMain"
        },
        HRV: {
            Name: "HR-V",
            Year: 2025,
            Color: "White",
            Price: 27000,
            picture: "https://th.bing.com/th/id/R.258882eb27cf20b7d520e5b880ac7c6a?rik=8Xuhjs3iz6pDkw&pid=ImgRaw&r=0"
        },
        Pilot: {
            Name: "Pilot",
            Year: 2025,
            Color: "Silver",
            Price: 40000,
            picture: "https://th.bing.com/th/id/R.ca5438f1b69fe819101a58076a20456d?rik=NQuxJP5QkgEHWw&pid=ImgRaw&r=0"
        }
    },
    Toyota: {
        Camry: {
            Name: "Camry",
            Year: 2025,
            Color: "Black",
            Price: 25000,
            picture: "https://th.bing.com/th/id/OIP.AelUYcTxikRRA35WUPyNjQHaE8?rs=1&pid=ImgDetMain"
        },
        Corolla: {
            Name: "Corolla",
            Year: 2025,
            Color: "White",
            Price: 22000,
            picture: "https://www.auto-data.net/images/f53/Toyota-Corolla-XII-E210-facelift-2022-US.jpg"
        },
        RAV4: {
            Name: "RAV4",
            Year: 2025,
            Color: "Blue",
            Price: 30000,
            picture:"https://th.bing.com/th/id/OIP.1i41Jn4SoaIgi4F98IPzuQHaEK?rs=1&pid=ImgDetMain"
        },
        Highlander: {
            Name: "Highlander",
            Year: 2025,
            Color: "Red",
            Price: 35000,
            picture:"https://th.bing.com/th/id/OIP.3Blh6JBESbNlsl1jBJ63ZAHaEK?rs=1&pid=ImgDetMain"
        },
        Tacoma: {
            Name: "Tacoma",
            Year: 2025,
            Color: "Silver",
            Price: 34000,
            picture:"https://th.bing.com/th/id/OIP.LOhFN-4mQxuERAyh2CZkpAHaEV?w=768&h=450&rs=1&pid=ImgDetMain"
        }
    },
    Ford: {
        F150: {
            Name: "F-150",
            Year: 2025,
            Color: "Red",
            Price: 35000,
            picture:"https://i.pinimg.com/originals/b6/da/da/b6dada294d5fbf8683de0b9008ff9ebc.jpg"
        },
        Mustang: {
            Name: "Mustang",
            Year: 2025,
            Color: "Yellow",
            Price: 45000,
            picture:"https://th.bing.com/th/id/OIP._ni4aODHfuySF5qP8k1NHgHaE8?rs=1&pid=ImgDetMain"
        },
        Explorer: {
            Name: "Explorer",
            Year: 2025,
            Color: "Blue",
            Price: 40000,
            picture:"https://th.bing.com/th/id/OIP.VdbKS86bPm97PgWdlYnBKAHaE7?rs=1&pid=ImgDetMain"
        },
        Escape: {
            Name: "Escape",
            Year: 2025,
            Color: "Green",
            Price: 28000,
            picture:"https://th.bing.com/th/id/OIP.sLszUueE3oaCje7rQtAkjQAAAA?w=474&h=284&rs=1&pid=ImgDetMain"
        },
        Bronco: {
            Name: "Bronco",
            Year: 2025,
            Color: "Black",
            Price: 38000,
            picture:"https://th.bing.com/th/id/OIP.yBADUPTLYDFHGBP4cTE2NAHaEK?rs=1&pid=ImgDetMain"
        }
    },
    Chevrolet: {
        Silverado: {
            Name: "Silverado",
            Year: 2025,
            Color: "Gray",
            Price: 35000,
            picture:"https://st.motortrendenespanol.com/uploads/sites/45/2016/04/2016-Chevrolet-Silverado-2500-front-three-quarter.jpg"
        },
        Malibu: {
            Name: "Malibu",
            Year: 2025,
            Color: "White",
            Price: 24000,
            picture:"https://th.bing.com/th/id/OIP.ise6TBlxrnuRn0Os-MMzZAAAAA?w=474&h=315&rs=1&pid=ImgDetMain"
        },
        Equinox: {
            Name: "Equinox",
            Year: 2025,
            Color: "Red",
            Price: 29000,
            picture:"https://th.bing.com/th/id/OIP.wUBRa8DgPj6h2R1ZSR3LYAHaE8?rs=1&pid=ImgDetMain"
        },
        Traverse: {
            Name: "Traverse",
            Year: 2025,
            Color: "Blue",
            Price: 33000,
            picture:"https://th.bing.com/th/id/OIP.J2I79kKn3g8MJ_DUGZitvAHaE7?rs=1&pid=ImgDetMain"
        },
        Camaro: {
            Name: "Camaro",
            Year: 2025,
            Color: "Black",
            Price: 42000,
            picture:"https://th.bing.com/th/id/OIP.PFzfO4XjAdt9diGhZr97iwHaEK?rs=1&pid=ImgDetMain"
        }
    },
    Nissan: {
        Altima: {
            Name: "Altima",
            Year: 2025,
            Color: "Silver",
            Price: 25000,
            picture :"https://th.bing.com/th/id/OIP.i1bvEyDk927cfH48MXkXmgHaEK?rs=1&pid=ImgDetMain"
        },
        Sentra: {
            Name: "Sentra",
            Year: 2025,
            Color: "White",
            Price: 21000,
            picture:"https://th.bing.com/th/id/OIP.JABW8bk9_TPN7w32ZInk3gHaE8?rs=1&pid=ImgDetMain"
        },
        Rogue: {
            Name: "Rogue",
            Year: 2025,
            Color: "Blue",
            Price: 30000,
            picture:"https://th.bing.com/th/id/R.6c1bda765af52a567342e023cf936ad3?rik=%2fHVwWJhsq72OXw&pid=ImgRaw&r=0"
        },
        Murano: {
            Name: "Murano",
            Year: 2025,
            Color: "Red",
            Price: 36000,
            picture:"https://th.bing.com/th/id/OIP.9IAuidimSB11v0dOibG-QgHaEO?rs=1&pid=ImgDetMain"
        },
        Pathfinder: {
            Name: "Pathfinder",
            Year: 2025,
            Color: "Black",
            Price: 38000,
            picture: "https://th.bing.com/th/id/R.a575204ae24de854b0d1493a7f79a4bf?rik=%2ftJADOkC4skXDg&riu=http%3a%2f%2fimages.hgmsites.net%2fhug%2f2016-nissan-pathfinder_100544165_h.jpg&ehk=ld14ve%2f1ZAAu7eoCWNkm3%2b3fH31uipok8BWCNL8ULI8%3d&risl=&pid=ImgRaw&r=0"
        }
    }
};
    
    
    
    

let brand = document.getElementById("Brands");
let model = document.getElementById("model");
let carlist = document.getElementById("carlist");
function loadallcars(){ 

for(let brand in cars) {
    Brands.innerHTML += `<option value="${brand}" >${brand.toUpperCase()}</option>`;
    for(let model in cars [brand]) {
        let details  = cars[brand][model];
        carlist.innerHTML += `<div class="col" >
    <div class="card" >
        <img src="${details.picture} " class="card-img-top  " alt="...">
        <div class="card-body ">
          <h5 class="card-title">${details.Name}</h5>
          <p class="card-text">${details.Price}</p>
        </div>`

}
}
};
loadallcars();

function search(){
    carlist.innerHTML =  ""
if(brand.value && model.value){
    let details = cars[brand.value][model.value];
    carlist.innerHTML = `<div class="col" >
    <div class="card" >
        <img src="${details.picture} " class="card-img-top  "  alt="...">
        <div class="card-body ">
          <h5 class="card-title">${details.Name}</h5>
          <p class="card-text">${details.Price}</p>
        </div>`

}else if(brand.value){
    for(let model in cars[brand]){
        let details = cars[brand.value][model];
        carlist.innerHTML += `<div class="col" >
        <div class="card" >
            <img src="${details.picture} " class="card-img-top  "  alt="...">
            <div class="card-body  ">
              <h5 class="card-title">${details.Name}</h5>
              <p class="card-text">${details.Price}</p>
            </div>`
}




}else{
    loadallcars();   
}






};
    function brandsname(){
        model.innerHTML = `<option value="Select Models" selected>Select Models</option>`;
       for(let key in cars [brand.value])
        model.innerHTML += `<option value="${key}" >${key.toUpperCase()} </option>`;

    }