// const currencyData = [
//   {"code":"AED","name":"UAE Dirham","country":"United Arab Emirates"},
//   {"code":"AFN","name":"Afghan Afghani","country":"Afghanistan"},
//   {"code":"ALL","name":"Albanian Lek","country":"Albania"},
//   {"code":"AMD","name":"Armenian Dram","country":"Armenia"},
//   {"code":"ANG","name":"Netherlands Antillian Guilder","country":"Netherlands Antilles"},
//   {"code":"AOA","name":"Angolan Kwanza","country":"Angola"},
//   {"code":"ARS","name":"Argentine Peso","country":"Argentina"},
//   {"code":"AUD","name":"Australian Dollar","country":"Australia"},
//   {"code":"AWG","name":"Aruban Florin","country":"Aruba"},
//   {"code":"AZN","name":"Azerbaijani Manat","country":"Azerbaijan"},
//   {"code":"BAM","name":"Bosnia and Herzegovina Mark","country":"Bosnia and Herzegovina"},
//   {"code":"BBD","name":"Barbados Dollar","country":"Barbados"},
//   {"code":"BDT","name":"Bangladeshi Taka","country":"Bangladesh"},
//   {"code":"BGN","name":"Bulgarian Lev","country":"Bulgaria"},
//   {"code":"BHD","name":"Bahraini Dinar","country":"Bahrain"},
//   {"code":"BIF","name":"Burundian Franc","country":"Burundi"},
//   {"code":"BMD","name":"Bermudian Dollar","country":"Bermuda"},
//   {"code":"BND","name":"Brunei Dollar","country":"Brunei"},
//   {"code":"BOB","name":"Bolivian Boliviano","country":"Bolivia"},
//   {"code":"BRL","name":"Brazilian Real","country":"Brazil"},
//   {"code":"BSD","name":"Bahamian Dollar","country":"Bahamas"},
//   {"code":"BTN","name":"Bhutanese Ngultrum","country":"Bhutan"},
//   {"code":"BWP","name":"Botswana Pula","country":"Botswana"},
//   {"code":"BYN","name":"Belarusian Ruble","country":"Belarus"},
//   {"code":"BZD","name":"Belize Dollar","country":"Belize"},
//   {"code":"CAD","name":"Canadian Dollar","country":"Canada"},
//   {"code":"CDF","name":"Congolese Franc","country":"DR Congo"},
//   {"code":"CHF","name":"Swiss Franc","country":"Switzerland"},
//   {"code":"CLF","name":"Chilean Unidad de Fomento","country":"Chile"},
//   {"code":"CLP","name":"Chilean Peso","country":"Chile"},
//   {"code":"CNH","name":"Offshore Chinese Renminbi","country":"China"},
//   {"code":"CNY","name":"Chinese Renminbi","country":"China"},
//   {"code":"COP","name":"Colombian Peso","country":"Colombia"},
//   {"code":"CRC","name":"Costa Rican Colon","country":"Costa Rica"},
//   {"code":"CUP","name":"Cuban Peso","country":"Cuba"},
//   {"code":"CVE","name":"Cape Verdean Escudo","country":"Cape Verde"},
//   {"code":"CZK","name":"Czech Koruna","country":"Czech Republic"},
//   {"code":"DJF","name":"Djiboutian Franc","country":"Djibouti"},
//   {"code":"DKK","name":"Danish Krone","country":"Denmark"},
//   {"code":"DOP","name":"Dominican Peso","country":"Dominican Republic"},
//   {"code":"DZD","name":"Algerian Dinar","country":"Algeria"},
//   {"code":"EGP","name":"Egyptian Pound","country":"Egypt"},
//   {"code":"ERN","name":"Eritrean Nakfa","country":"Eritrea"},
//   {"code":"ETB","name":"Ethiopian Birr","country":"Ethiopia"},
//   {"code":"EUR","name":"Euro","country":"European Union"},
//   {"code":"FJD","name":"Fiji Dollar","country":"Fiji"},
//   {"code":"FKP","name":"Falkland Islands Pound","country":"Falkland Islands"},
//   {"code":"FOK","name":"Faroese Króna","country":"Faroe Islands"},
//   {"code":"GBP","name":"Pound Sterling","country":"United Kingdom"},
//   {"code":"GEL","name":"Georgian Lari","country":"Georgia"},
//   {"code":"GGP","name":"Guernsey Pound","country":"Guernsey"},
//   {"code":"GHS","name":"Ghanaian Cedi","country":"Ghana"},
//   {"code":"GIP","name":"Gibraltar Pound","country":"Gibraltar"},
//   {"code":"GMD","name":"Gambian Dalasi","country":"Gambia"},
//   {"code":"GNF","name":"Guinean Franc","country":"Guinea"},
//   {"code":"GTQ","name":"Guatemalan Quetzal","country":"Guatemala"},
//   {"code":"GYD","name":"Guyanese Dollar","country":"Guyana"},
//   {"code":"HKD","name":"Hong Kong Dollar","country":"Hong Kong"},
//   {"code":"HNL","name":"Honduran Lempira","country":"Honduras"},
//   {"code":"HRK","name":"Croatian Kuna","country":"Croatia"},
//   {"code":"HTG","name":"Haitian Gourde","country":"Haiti"},
//   {"code":"HUF","name":"Hungarian Forint","country":"Hungary"},
//   {"code":"IDR","name":"Indonesian Rupiah","country":"Indonesia"},
//   {"code":"ILS","name":"Israeli New Shekel","country":"Israel"},
//   {"code":"INR","name":"Indian Rupee","country":"India"},
//   {"code":"IQD","name":"Iraqi Dinar","country":"Iraq"},
//   {"code":"IRR","name":"Iranian Rial","country":"Iran"},
//   {"code":"ISK","name":"Icelandic Króna","country":"Iceland"},
//   {"code":"JMD","name":"Jamaican Dollar","country":"Jamaica"},
//   {"code":"JOD","name":"Jordanian Dinar","country":"Jordan"},
//   {"code":"JPY","name":"Japanese Yen","country":"Japan"},
//   {"code":"KRW","name":"South Korean Won","country":"South Korea"},
//   {"code":"KWD","name":"Kuwaiti Dinar","country":"Kuwait"},
//   {"code":"MXN","name":"Mexican Peso","country":"Mexico"},
//   {"code":"MYR","name":"Malaysian Ringgit","country":"Malaysia"},
//   {"code":"NGN","name":"Nigerian Naira","country":"Nigeria"},
//   {"code":"NOK","name":"Norwegian Krone","country":"Norway"},
//   {"code":"NPR","name":"Nepalese Rupee","country":"Nepal"},
//   {"code":"NZD","name":"New Zealand Dollar","country":"New Zealand"},
//   {"code":"PKR","name":"Pakistani Rupee","country":"Pakistan"},
//   {"code":"QAR","name":"Qatari Riyal","country":"Qatar"},
//   {"code":"RUB","name":"Russian Ruble","country":"Russia"},
//   {"code":"SAR","name":"Saudi Riyal","country":"Saudi Arabia"},
//   {"code":"SGD","name":"Singapore Dollar","country":"Singapore"},
//   {"code":"THB","name":"Thai Baht","country":"Thailand"},
//   {"code":"TRY","name":"Turkish Lira","country":"Turkey"},
//   {"code":"USD","name":"United States Dollar","country":"United States"},
//   {"code":"VND","name":"Vietnamese Dong","country":"Vietnam"},
//   {"code":"ZAR","name":"South African Rand","country":"South Africa"}
// ]

let currMonth = ''
let data = JSON.parse(localStorage.getItem("DATA")) || {}
console.log('localData', data)
let salary = 0;
let totalExpns = 0;

const expanseButton = document.querySelector('.expanseButton')
const formDiv = document.querySelector('.formDiv')
const closeBtn = document.querySelector('.close')
const salaryInput = document.getElementById('salaryInput')
const expanseInput = document.getElementById('expanseInput')
const remarksInput = document.getElementById('remarksInput')
const expanse = document.querySelector('.expanse')
const addMonth = document.querySelector('.addMonth')
const monthName = document.querySelector('#monthName')
const salaryElement = document.querySelector('.salary')
const salaryDiv = document.getElementById('salaryAmt')
const totalExpanse = document.querySelector('.totalExpanse')
const remainingAmnt = document.querySelector('.remainingAmnt')
const monthList = document.querySelector('.monthList')
const msg = document.querySelector('.msg')
const hamburger = document.getElementById('hamburger')
const closeMenu = document.getElementById('closeMenu')
const ctx = document.getElementById('myChart').getContext('2d');
const visualize = document.getElementById('visualize')
const closeChart = document.getElementById('closeChart')
const pdfBtn = document.getElementById('pdfBtn')


for(let key in data){
    createMonth(key)
}


function generateUniqueId(){
   return Math.floor(10000 + Math.random() * 90000) 
          + Date.now().toString().slice(-2);
}

function deleteData(uid){
    console.log(uid)
    data[currMonth] = data[currMonth].filter( val => val.id != uid)

    setData(data)
    console.log(data)
}

function deleteMonth(month){
    delete data[month]
    setData(data)
    console.log("Month deleted", data)

    if(currMonth === month){
        console.log("yes")
        remainingAmnt.innerHTML = 'Available balance'
        totalExpanse.innerHTML = 'Total expanse'
        expanse.innerHTML = ''
        salaryElement.innerHTML = '0'
        msg.style.display = 'block'
    }
}

function setData(data){
    localStorage.setItem('DATA', JSON.stringify(data))
}



 function exportPDF(data){

   const { jsPDF } = window.jspdf;
   const doc = new jsPDF();

   let startY = 10;

   for(let month in data){

      doc.setFontSize(14);
      doc.text(month.toUpperCase(), 10, startY);
      startY += 8;

      // ---- SUMMARY (first object) ----
      const summary = data[month][0];

      doc.setFontSize(11);
      doc.text(`Salary: ${summary.salary}`, 10, startY);
      startY += 6;

      doc.text(`Available Balance: ${summary.avilableBalance}`, 10, startY);
      startY += 6;

      doc.text(`Total Expense: ${summary.totalExpanse}`, 10, startY);
      startY += 10;

      // ---- EXPENSE TABLE ----
      let tableBody = [];

      data[month].slice(1).forEach(item => {

         // remove id
         const { id, ...filtered } = item;

         tableBody.push([
            filtered.expanseAmount,
            filtered.remarks
         ]);
      });

      doc.autoTable({
         head: [['Expense Amount', 'Remarks']],
         body: tableBody,
         startY
      });

      startY = doc.lastAutoTable.finalY + 12;
   }

   doc.save("expense-report.pdf");
}




pdfBtn.addEventListener('click', ()=>{
    if(Object.keys(data).length === 0) return alert("No data avaialable")
    exportPDF(data)
})


hamburger.addEventListener('click', ()=>{
    document.querySelector('.sidebar').style.display = 'block'
})

closeMenu.addEventListener('click', ()=>{
    document.querySelector('.sidebar').style.display = 'none'

})

closeChart.addEventListener('click', ()=>{
    document.querySelector('.pie').style.display = 'none'
})

visualize.addEventListener('click', ()=>{
    if(currMonth === ''){
        alert("No data available")
        return
    }
    document.querySelector('.pie').style.display = 'flex'
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Available balance', 'Salary', 'Total expanse'],
            datasets: [{
                data: [data[currMonth][0].avilableBalance, data[currMonth][0].salary, data[currMonth][0].totalExpanse],
                backgroundColor: [
                    '#6366F1',
                    '#22C55E',
                    '#EF4444'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
})

expanseButton.addEventListener('click', ()=>{
    console.log("currmonth", currMonth)
    if(currMonth === '') return alert('Add month or click on month first')
    if(data[currMonth][0]?.salary){
        salaryDiv.style.display = 'none'
        salaryInput.required = false;
    }
    formDiv.style.display = 'block'
})

closeBtn.addEventListener('click', ()=>{
    formDiv.style.display = 'none'
})

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(salaryInput.value, expanseInput.value, remarksInput.value)
    if(salary === 0 && salaryInput.value != ''){
        salaryElement.innerHTML = salaryInput.value
    }
    salary = salaryInput.value

    if(salaryInput.value != '')
    data[currMonth].push({
        salary: salaryInput.value,
        avilableBalance: 0,
        totalExpanse: 0
    })
    const uid = generateUniqueId()
    data[currMonth].push({
        id: uid,
        expanseAmount: expanseInput.value,
        remarks: remarksInput.value
    })

    console.log(data)
    setData(data)
    createExpanseList(expanseInput.value, remarksInput.value, uid)

    expanseInput.value = ''
    remarksInput.value = ''
    salaryInput.value = ''

    formDiv.style.display = 'none'


})

function createExpanseList(expanseData, remarksData, uid){
    const li = document.createElement('li')
    const h41 = document.createElement('h4')
    const h42 = document.createElement('h4')
    const i = document.createElement('i')

    li.id = uid
    li.classList.add('expanseList')
    h41.classList.add('expanseAmnt')
    h42.classList.add('remarks')
    i.classList.add('fa-solid')
    i.classList.add('fa-trash')
    i.classList.add('deleteExpanse')

    h41.innerHTML = expanseData
    h42.innerHTML = remarksData

    li.appendChild(h41)
    li.appendChild(h42)
    li.appendChild(i)

    salary = data[currMonth][0]?.salary

    console.log(salary, 'salary')

    totalExpns = totalExpns + Number(expanseData)
    salary = salary - totalExpns;

    const percent = 10/salary*100
    if(salary<=percent){
        remainingAmnt.style.color = '#EF4444'
        alert('your balance is below 10%')
    }

    data[currMonth][0].avilableBalance = salary
    data[currMonth][0].totalExpanse = totalExpns
    setData(data)

    console.log("adding",salary, totalExpns)
    remainingAmnt.textContent = `Available balance ${salary}`
    totalExpanse.textContent =  `Total expanse ${totalExpns}`

    console.log(li, h41, h42, i, length)


    expanse.appendChild(li)
    
    i.addEventListener('click', ()=>{
        totalExpns = totalExpns - Number(expanseData)
        salary = salary + Number(expanseData);

        data[currMonth][0].avilableBalance = salary
        data[currMonth][0].totalExpanse = totalExpns
        setData(data)

        console.log("adding",salary, totalExpns)
        remainingAmnt.textContent = `Available balance ${salary}`
        totalExpanse.textContent =  `Total expanse ${totalExpns}`

        deleteData(uid)

        expanse.removeChild(li)
    })

        

}


addMonth.addEventListener('click', ()=>{
    const month = monthName.value;
    monthName.value = ''
    console.log(month)
    if(month === '' ) {
        alert('Enter month name')
        return;
    }
    if(data[month]){
        alert('month is already exist')
        return;
    } 
    
    data[month] = [];
    createMonth(month)
    console.log(data)
})


function createMonth(month){
    const li = document.createElement('li')
    const p = document.createElement('p')
    const i = document.createElement('i')

    li.id = month
    li.classList.add('mnth')
    p.innerHTML = month
    i.classList.add('fa-solid')
    i.classList.add('fa-trash')
    i.classList.add('deleteMonth')

    li.appendChild(p)
    li.appendChild(i)
    monthList.appendChild(li)

    i.addEventListener('click', ()=>{
        deleteMonth(month)
        monthList.removeChild(li)
    })
}

monthList.addEventListener('click', (e)=>{
    if(e.target.tagName != 'LI') return

    if(( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ))
        document.querySelector('.sidebar').style.display = 'none'
    const element = e.target
    const elementId = element.id
    currMonth = elementId
    console.log(element, element.tagName, element.id)
    console.log(expanseButton)
    totalExpns = 0
    salary = 0

    if(element.tagName === 'LI'){
        const lists = document.querySelectorAll('.mnth')
        lists.forEach((el)=>{
            if(el.classList.contains('active')){
                el.classList.remove('active')
                el.style.backgroundColor = '#F9FAFB'
            }
        })

        remainingAmnt.innerHTML = 'Available balance'
        totalExpanse.innerHTML = 'Total expanse'
        expanse.innerHTML = ''
        salaryElement.innerHTML = '0'
        msg.style.display = 'none'
        // expanseButton.style.display = 'block'
        element.style.backgroundColor = '#EEF2FF'
        element.classList.add('active')
        salaryDiv.style.display = 'flex'
        salaryInput.required = true;

        
        console.log(data[elementId])
        data[elementId].forEach((val, ind)=>{
            if(ind !=0)
            createExpanseList(val.expanseAmount, val.remarks, ind)
            else salaryElement.innerHTML = val.salary
        })
    }
})



// const obj = {
//     january:[
//         {
//             salary: 1200,
//             avilableBalance: 200,
//             totalExpans: 200
//         },
//         {
//             id: '22',
//             expanseAmount: 200,
//             remarks: 'toy'
//         }
//     ],

//     february:[
//         {
//             salary: 1200,
//             avilableBalance: 200,
//             totalExpans: 200
//         },
//         {
//             id: '2121w',
//             expanseAmount: 200,
//             remarks: 'toy'
//         }
//     ]
// }