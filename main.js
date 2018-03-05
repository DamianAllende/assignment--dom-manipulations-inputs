document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  let limpiar = document.querySelector("#reset-field input")
  limpiar.value = ""
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  let textAlert = document.querySelector("#validate-field .flash-message")
  let inputValidar = document.querySelector("#validate-field input")
  numCaracteres = inputValidar.value.length
  //console.log(numCaracteres)
  if (numCaracteres <= 5) {
  	console.log("daamian")
  	textAlert.textContent = "NoPo" 
  	textAlert.style.color = "#ffffff"
  	textAlert.style.backgroundColor = "#890000"
	} else if(numCaracteres >= 6){
	  	textAlert.textContent = "***Yepa***" 
	  	textAlert.style.color = "#ffffff"
  		textAlert.style.backgroundColor = "#026F04"
	  }

})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
  let increment = 0
  let suma = document.querySelector(".sum-total")
  let checkSuma = document.querySelectorAll(".cars-list input")
  //console.log(checkSuma)
  const arrayCheck = [...checkSuma]
  //console.log(arrayCheck)
  for(let i = 0; i < arrayCheck.length; i++){
  	//console.log(typeof arrayCheck[i].value)
  	
  	//console.log(typeof itemNumber)
  	if (arrayCheck[i].checked == true) {
  		//console.log(arrayCheck[i])
  		let itemNumber =  parseInt(arrayCheck[i].value)
  		//console.log(itemNumber)
  		increment += itemNumber
  	}
  }
  suma.textContent = increment

})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
  let box = document.querySelector("#select-to-show-more .selection")
  let contentSet = box.options[box.selectedIndex]
  let model =  document.querySelector(".more-info .model")
  let msrp =  document.querySelector(".more-info .msrp")
  let mpg = document.querySelector(".more-info .mpg")
  let edmunds = document.querySelector(".more-info .edmunds")
  let tagImg = document.querySelector(".more-info .img-box")
  let contentImg = contentSet.dataset.img
  model.textContent = box.value
  msrp.textContent = contentSet.dataset.msrp
  mpg.textContent = contentSet.dataset.mpg
  edmunds.textContent = contentSet.dataset.edmunds
  tagImg.innerHTML = `<img src="images/${contentImg}"/>`

  console.log("model")


  console.log(box.options[box.selectedIndex])
  

})



document.querySelector("#add-guest input").addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		var node = document.createElement("li")
		node.classList="guest"
		node.textContent = this.value
		document.querySelector("#add-guest ul").appendChild(node)
		this.value = ""
	}
	console.log("holi")
})
