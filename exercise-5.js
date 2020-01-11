/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary Curl up and Dye Beauty Salon Program || created: 1/11/20
 */
 
"use strict";
const PROMPT = require('readline-sync');
const IO = require('fs');

let custId, choice, service,//number
firstName, lastName, save;//string
let paidTotal = 0;//setting new person total to 0
let customer = [];//customer array
let master = [];//main file

function main(){
		setChoice(); //gives the choice of adding, or updating a customer, as well as main data
		if(choice == 1){
			setFirstName();
			setLastName();
			setCustId();//gives cutomer an ID
			setService();
			setPaidTotal();//adds total
		firstName = customer[0];
		lastName = customer[1];
		custId = customer[2];
		paidTotal = customer[3];
		master.push(customer); //pushes the new customer in
		setSave();
		}else if(choice == 2){
			setFirstName();
		if(firstName == master[0]){//checks to see if it is a known customer
				setService();
				setPaidTotal();
				if(master[3] >= 750){
					console.log(`${firstName} ${lastName} gets a coupon for a free haircut!`)//gives a coupon to those that have spent 750 or more
				}
				setSave();
			}
		}else{
			console.log(`${master}`)//shows data
		}
}

main();

function setChoice(){
	choice = PROMPT.question(`\nPlease chose an option. [New user = 1, Known user = 2, printData = 3]`)
}

function setFirstName(){
	firstName = PROMPT.question(`\nWhat is your first name?`)
}

function setLastName(){
	lastName = PROMPT.question(`\nWhat is your last name?`)
}

function setCustId(){
	custId = Math.round(Math.random() * 2000)+1;//random number 1-2000
	if(custId == master[2]){
		setCustId();//if id's match, it trys again
	}
}

function setService(){
service = PROMPT.question(`\nPlease Pick One. [haircut = 1, manicure = 2, full service = 3]`)
}

function setPaidTotal(){
	const HAIRCUT = 50;
	const MANICURE = 55;
	const FULL = 95;
	if(service == 1){
		paidTotal = (paidTotal + HAIRCUT);
	}else if(service == 2){
		paidTotal = (paidTotal + MANICURE);
	}else{
		paidTotal = (paidTotal + FULL);
	}
}

function setSave(){
	save = IO.unlink(`master.txt`)//erases old data
	save = IO.appendfile(`master.txt, exercise-5.js`)//saves new data
}
