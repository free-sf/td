var pop = document.getElementById('popup');
function Calculate()
{
   
var fnames = document.getElementById('fname').value;
var age = Number(document.getElementById('Age').value);
var occupation = document.getElementById('Occupation').value;
var bmi = Number(document.getElementById('BMI').value);
var morbidity  = document.getElementById("Morbidity").value;
var symptoms = document.getElementById('Symptoms').value;
var wearing = document.getElementById('Wearing').value;
var sanitize = document.getElementById('Sanitize').value;
var social = document.getElementById('Social').value;
var smoke = document.getElementById('Smoke').value;
var khat = document.getElementById('Khat').value;
var alcohol = document.getElementById('Alcohol').value;
var sex = document.getElementById('txtSex').value;
if(age==" "|| bmi==' ')
{
    alert('እባክዎትን ዕድመ እና BMI ማስገባትዎ ያረጋግጡ');
}
else {
if(age>=50)
{
    age =1;
}
else if(age<50)
{
    age =0;
} 

//Occupation
if (occupation=='HW')
{
     occupation = 1;
}
else if (occupation=='Customer Service')
{
    occupation = 0.8;
}
else if (occupation=='Daily laborer')
{
    occupation = 0.6;
}
else if (occupation=='Teachers')
{
    occupation= 0.4;
}
else if (occupation=='Office')
{
     occupation = 0.2;
}
else if (occupation=='Others')
{
    occupation = 0;
}

// BMI
if (bmi<30)
{
    bmi = 0
}
else if (bmi>30 && bmi< 34.9)
{
    bmi = 0.3
}
else if (bmi>34.9 && bmi< 39.9)
{
    bmi = 0.7
}
else if (bmi>40)
{
    bmi= 1
}

//Mobilities 
if(morbidity=='No')
{
    morbidity =0
}
else if(morbidity=='One')
{
    morbidity =0.3
}
else if (morbidity=='Two')
{
    morbidity =0.7
}
else if (morbidity=='Three and more')
{
    morbidity=1
}
//symptoms
if(symptoms=='No')
{
    symptoms = 0
}
else if(symptoms=='One')
{
    symptoms = 0.3
}
else if(symptoms=="Two")
{
    symptoms = 0.7
}
else if(symptoms=='Three and more')
{
    symptoms = 1
}
//Wearing mask
if(wearing=='No')
{
    wearing = 1
}
else if(wearing=='Yes')
{
    wearing = 0
}
else if(wearing=='Sometimes')
{
    wearing = 0.5
}
// sanitize
if(sanitize=='No')
{
    sanitize = 1
}
else if(sanitize=='Yes')
{
    sanitize = 0
}
else if(sanitize=='Sometimes')
{
    sanitize = 0.5
}

// social Distance 
if(social=='No')
{
    social = 1
}
else if(social=='Yes')
{
    social = 0
}
else if(social=='Sometimes')
{
    social= 0.5
}

// Smoke Cigarates 
if(smoke=='No')
{
    smoke = 1
}
else if(smoke=='Yes')
{
    smoke = 0
}
if(smoke=='Sometimes')
{
    smoke = 0.5
}

//Khat
if(khat=='Regularly')
{
    khat = 1
}
else if(khat=='SomeTimes')
{
    khat = 0.5
}
else if(khat=="No")
{
    khat = 0
}

//alcohol
if(alcohol=='Regularly')
{
    alcohol= 1
}
if(alcohol=='Some Times')
{
    alcohol= 0.5;
}
if(alcohol=='No')
{
    alcohol= 0;
}
if(sex=='male')
{
    sex = 1;
}
else if (sex ='Female')
{
    sex = 0;
}
//alert(sex)

var sum = Number(age)+ Number(occupation)+Number(bmi)+ Number(morbidity)+Number(symptoms)+ Number(wearing)+Number(sanitize)+Number(social)+Number(smoke)+Number(khat)+ Number(alcohol)+Number(sex);
//alert(sum)
//document.getElementById('txtsum').value =String(sum);
document.getElementById('txtName').value=fnames;
document.getElementById("txtsumation").value = String(sum)
var comment; 
 if(sum<=3)
 {
    comment = "Low"
 }
 else if (sum>3 && sum <=6)
 {
    comment="Moderate"
 }
 else if (sum>6 && sum <=9)
 {
    comment="High"
 }
 else if (sum >9)
 {
    comment="Very High"
 }
 document.getElementById('txtrisk').value =comment;

pop.classList.add('open-popup');
}
}
function closepopup(){
    pop.classList.remove('open-popup');
}
