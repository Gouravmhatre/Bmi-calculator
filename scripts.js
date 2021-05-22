function calculateBmi()
{
    var height=document.getElementById('height').value
    var weight=document.getElementById('weight').value
   
    var bmi=weight/((height/100)*(height/100))
    console.log(bmi)

    if (bmi <= 18.6)
    {
        document.getElementById('para').innerHTML="Underweight"

    }
    else if(18.6 < bmi && bmi <= 24.9 )
    {
        document.getElementById('para').innerHTML="Normal"
    }
    else 
    {
        document.getElementById('para').innerHTML="Overweight"
    }
}