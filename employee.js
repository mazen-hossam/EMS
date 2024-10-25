//#region Dom Elements
let addemployee = document.getElementById("addemployee");
let editemployee= document.getElementById("editemployee");
let newemployeeform = document.getElementById("newemployeeform");
let firstname = document.getElementById("firstname");
let yesdelete = document.getElementById("yesdelete");
let exampleModa4 = document.getElementById("exampleModa4");
let emailemployee = document.getElementById("emailemployee");
let empolyeeid = document.getElementById("empolyeeid");
let empolyeephonenumber = document.getElementById("empolyeephonenumber");
let modal2 = document.getElementById("modal2");
let searchemployee = document.getElementById("searchemployee");
let searchform = document.getElementById("searchform");
let btnsearch = document.getElementById("btnsearch");
let date = document.getElementById("date");
let lastname = document.getElementById("lastname");
let selectjop = document.getElementById("selectjop");
let modaldetails = document.getElementById("exampleModal");
let coustomtable = document.getElementById("coustomtable");

let nametodelete = document.getElementById("nametodelete");

let idOfthisRow = document.getElementById("idOfthisRow");
let firstnameDetails = document.getElementById("firstnameDetails");
let IdDetails = document.getElementById("IdDetails");
let lastenameDetails = document.getElementById("lastenameDetails");
let emailDetails = document.getElementById("emailDetails");
let phonenumberdetails = document.getElementById("phonenumberdetails");
let jopDetails = document.getElementById("jopDetails");
let dateDetails = document.getElementById("dateDetails");

let modalforAdd = document.getElementById("modalforAdd");

let idOfUbdate = document.getElementById("idOfUbdate");

let editemployees = document.getElementById("editemployees");

let editOnEmployee = document.getElementById("editOnEmployee");

let editname = document.getElementById("editname");
let editlastname = document.getElementById("editlastname");
let editemail = document.getElementById("editemail");
let editid = document.getElementById("editid");

var modalContainer = document.getElementById('modalContainer');
var modalOverlay = document.getElementById('modalOverlay');
var closeModalButton = document.getElementById('closeModalButton');
var closeModalButton2 = document.getElementById('closeModalButton2');

var searchresult = document.getElementById('searchresult');

//#endregion

//#region Initial Data Source
let employeelist = [
    {Name : "mazen"  , employeeId : "741" ,  email: "mazen_hossam@gmail.com" , lastname:"hossam" , phonenumber: "01205389060" ,
     jop:"web developer", date : "1990-02-19" },

    {Name : "yamen"  , employeeId : "554" ,  email: "yamen_ahmed@gmail.com" , lastname:"ahmed" , phonenumber: "01205381257" ,
     jop:"web designer" , date : "1989-08-27"  },

    {Name : "yassen" , employeeId : "989" ,  email: "yassen_mohamed@gmail.com" , lastname:"mohamed" , phonenumber: "01205380127" ,
     jop:"full stack" , date : "1999-03-20"  },
     
     {Name : "youssef" , employeeId : "234" ,  email: "youssef_said@gmail.com" , lastname:"said" , phonenumber: "01205458127" ,
     jop:"web developer", date : "1988-02-19"  },

     {Name : "malek" , employeeId : "872" ,  email: "malek_ahmed@gmail.com" , lastname:"ahmed" , phonenumber: "01205103127" ,
     jop:"web designer" , date : "1997-04-18" },
];
//#endregion

//#region createemployee
const createemployee = (todo , id) => `   <tr class="align-middle">
  <td scope="row" class=" fw-bold" style="background-color :#eeeeee">${id+1}</td>
  <td>${todo.employeeId}</td>
  <td >${todo.Name}</td>
  <td>${todo.email}</td>
<td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn d-block btn-primary details ">Details</a></td>
<td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModa2" class="btn d-block btn-warning edit ">Edit</a></td>
<td><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModa3" class="btn d-block btn-danger delete ">Delete</a></td>
</tr>`;
//#endregion

//#region Binding employees
const Bindemployee = (todos) => {
    addemployee.innerHTML = todos.map(createemployee).join("");
};
//#endregion

//#region calling Binding employee
Bindemployee(employeelist);
//#endregion

//#region Bindsearch employee
searchform.addEventListener("submit", (e) => {
    e.preventDefault();
     
    btnsearch.onclick = function(){
        let searchedText = searchemployee.value;
        search(searchedText, employeelist);
    }
    let searchedText = searchemployee.value;
    search(searchedText, employeelist);
  });
//#endregion

//#region add new employee
newemployeeform.addEventListener("click" , (e) => { 
    e.preventDefault();
    let employee = firstname.value;
    let emailemploye = emailemployee.value;
    let empolyeeiD = empolyeeid.value; 
    let dateemployee = date.value;
    let lastName = lastname.value;
    let jop = selectjop.value;
    let phone = empolyeephonenumber.value;

      

  if(employee == "" || emailemploye == "" || empolyeeiD == "" || dateemployee == "" || lastName == "" || jop == "Select Job For Employee" || phone == ""){
      modalContainer.style.display = 'block';
      modalOverlay.style.display = 'block';

      closeModalButton.addEventListener('click', function () {
            // Hide the modal and overlay
            modalContainer.style.display = 'none';
            modalOverlay.style.display = 'none';
        });

        closeModalButton2.addEventListener('click', function () {
          // Hide the modal and overlay
          modalContainer.style.display = 'none';
          modalOverlay.style.display = 'none';
      });
    }

  else{
          
    let newdetails = {Name : employee , email : emailemploye , employeeId : empolyeeiD , lastname : lastName , jop : jop , date : dateemployee , phonenumber : phone };
    employeelist.push(newdetails);
    Bindemployee(employeelist); 
          
  }
        
 firstname.value="";
 emailemployee.value="";
 empolyeeid.value=""; 
 date.value=""; 
 lastname.value=""; 
 empolyeephonenumber.value = "";
 selectjop.value="Select Job For Employee"; 
});
//#endregion

//#region details employee
addemployee.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("details")) {

    let detailsOfRow = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let indexOfObject = employeelist.findIndex(obj => obj.employeeId === detailsOfRow);

    let idofrow = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    idOfthisRow.innerHTML = idofrow;
    firstnameDetails.innerHTML = employeelist[indexOfObject].Name;
    IdDetails.innerHTML = employeelist[indexOfObject].employeeId;
    lastenameDetails.innerHTML = employeelist[indexOfObject].lastname;
    emailDetails.innerHTML = employeelist[indexOfObject].email;
    phonenumberdetails.innerHTML = employeelist[indexOfObject].phonenumber;
    jopDetails.innerHTML = employeelist[indexOfObject].jop;
    dateDetails.innerHTML = employeelist[indexOfObject].date;
  }
});
//#endregion

//#region to Delete Emplyee
addemployee.addEventListener("click" , (e) => {
if(e.target.classList.contains("delete")){
  let name = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  nametodelete.innerHTML = "‘‘" + name + "‘‘";
    yesdelete.onclick = function(){
      let employeetobedeleted = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

      e.target.parentElement.parentElement.remove();

      let indextobedeleted = employeelist.findIndex((todo) => todo.Name === employeetobedeleted);
      employeelist.splice(indextobedeleted,1);
       
      console.log(nametodelete.innerHTML);
    }
}
});
//#endregion

//#region search
const search = (todoSearchText , list) => {
  let filteredTodos = list.filter((todo) => todo.Name.toUpperCase().includes(todoSearchText.toUpperCase()));
  if(filteredTodos == ""){
    addemployee.innerHTML = "";
    searchresult.style.display = 'block';
  }
  else{
    searchresult.style.display = 'none';
    Bindemployee(filteredTodos);
  }
};
//#endregion

//#region edit employee
addemployee.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    let editlist = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    let resultedit = employeelist.filter(array => array.employeeId === editlist);
    edit(resultedit);
  }
});
//#endregion

//#region createemployeedit
  const employeeedit = (todo) => `<tr>
  <div>
  <input type="date" class="form-control" id="editdate" value="${todo.date}">
</div>

<div class="col-md-6">
  <input type="text" class="form-control" id="editname" value="${todo.Name}" required>
</div>

<div class="col-md-6">
  <input type="text" class="form-control" id="editlastname" value="${todo.lastname}" required>
</div>

<div class="col-md-6">
  <input type="email" class="form-control" id="editemail" value="${todo.email}" required>
</div>

<div class="col-md-6">
    <input type="text" class="form-control" id="editid" value="${todo.employeeId}" readonly>
</div>

<div class="col-md-12">
    <input type="text" class="form-control" id="editphonenumber" value="${todo.phonenumber}" required>
</div>

<div class="col-md-12">
<select class="form-select" id="editjop" >
 <option  selected disabled>Select Job For Employee</option>
 <option>Web Developer</option>
 <option>Graphic Designer</option>
 <option>Web Designer</option>
 <option>Digital Marketer</option>
</select>
 </div>`;
//#endregion
  
//#region Binding employees
  const edit = (todos) => {
    editemployee.innerHTML = todos.map(employeeedit).join("");
  };
//#endregion

//#region edit from details model
addemployee.addEventListener("click", (e) => {
  if (e.target.classList.contains("details")) {
    editOnEmployee.onclick = function(){
      let editlist = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
      let resultedit = employeelist.filter(array => array.employeeId === editlist);
      console.log(resultedit);
      edit(resultedit);
    }

    idOfUbdate.onclick = function(){
      let editenamefromdetails = document.getElementById("editname");
      let editidfromdetails = document.getElementById("editid");
      let editemailfromdetails = document.getElementById("editemail");
      let editlastnamefromdetails = document.getElementById("editlastname");
      let editdatefromdetails = document.getElementById("editdate");
      let editphonenumberfromdetails = document.getElementById("editphonenumber");
      let jopfromdetails = document.getElementById("editjop");
      
      // id
      e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = editidfromdetails.value ;
      // name
      e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = editenamefromdetails.value ;
      // email
      e.target.parentElement.previousElementSibling.innerHTML = editemailfromdetails.value ;


      let EditDetails = 
      {
        Name       : e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML,
        email      : e.target.parentElement.previousElementSibling.innerHTML,
        employeeId :  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
        lastname   : editlastnamefromdetails.value,
        date       : editdatefromdetails.value,
        phonenumber: editphonenumberfromdetails.value,
        jop : jopfromdetails.value
      };


      let editthis = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    
      let indexOfthis = employeelist.findIndex(obj => obj.employeeId === editthis);


      let NameAfterEditDetails = EditDetails.Name;
     let LastNameAfterEditDetails = EditDetails.lastname;
     let DateAfterEditDetails = EditDetails.date;
     let EmailAfterEditDetails = EditDetails.email;
     let PhoneNumberAfterEditDetails = EditDetails.phonenumber;
     let jopAfterEditDetails = EditDetails.jop;


     employeelist[indexOfthis].Name = NameAfterEditDetails;
     employeelist[indexOfthis].lastname = LastNameAfterEditDetails;
     employeelist[indexOfthis].date = DateAfterEditDetails;
     employeelist[indexOfthis].email = EmailAfterEditDetails;
     employeelist[indexOfthis].phonenumber = PhoneNumberAfterEditDetails;
     employeelist[indexOfthis].jop = jopAfterEditDetails;
    }
    
  }
});
//#endregion

//#region edit employee
addemployee.addEventListener("click" , (e) => { 
  if (e.target.classList.contains("edit")) {
    idOfUbdate.onclick =  function(){
      let editname = document.getElementById("editname");
      let editid = document.getElementById("editid");
      let editemail = document.getElementById("editemail");
      let editlastname = document.getElementById("editlastname");
      let editdate = document.getElementById("editdate");
      let editphonenumber = document.getElementById("editphonenumber");
      let editejop = document.getElementById("editjop");

     let editlist = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;


     // id 
     e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = editid.value ;

    // name
    e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = editname.value ;

    // email
    e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = editemail.value ;
   
    let ubdateDetails = 
    {
      Name       : e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
      email      : e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML,
      employeeId :  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML,
      lastname   : editlastname.value,
      date       : editdate.value,
      phonenumber: editphonenumber.value,
      jop : editejop.value
    };
     let deletethis = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    
      let indexOfObject = employeelist.findIndex(obj => obj.employeeId === deletethis);

     let NameAfterUbdate = ubdateDetails.Name;
     let LastNameAfterUbdate = ubdateDetails.lastname;
     let DateAfterUbdate = ubdateDetails.date;
     let EmailAfterUbdate = ubdateDetails.email;
     let PhoneNumberAfterUbdate = ubdateDetails.phonenumber;
     let jopAfterUbdate = ubdateDetails.jop;


     employeelist[indexOfObject].Name = NameAfterUbdate;
     employeelist[indexOfObject].lastname = LastNameAfterUbdate;
     employeelist[indexOfObject].date = DateAfterUbdate;
     employeelist[indexOfObject].email = EmailAfterUbdate;
     employeelist[indexOfObject].phonenumber = PhoneNumberAfterUbdate;
     employeelist[indexOfObject].jop = jopAfterUbdate;


     let editjop = document.getElementById("editjop");
     console.log(editjop.value);
    }
  }

});
//#endregion


