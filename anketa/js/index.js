window.onload = function() {
    new_user();
};
  function  new_user() {
    let fio="";
    let years;
    let years_in_days;
    let years_future;
    let gender;
    let retire;
    let retire_confirm;
    
    enter_fio();
    enter_years();
    enter_gender();

    function enter_fio() {
        function enter_fio(question) {
          let answer=prompt(question);
            if (!answer || isFinite(parseInt(answer))){
             enter_fio(question);
            } else{
                fio+= answer+" ";
                 }
                 }

    enter_fio("Введите вашу фамилию: ");
    enter_fio("Введите вашe имя: ");
    enter_fio("Введите вашe отчество: ");}

    function enter_years() {
        years=parseInt(prompt("Введите возраст"));
            if (isFinite(years)){
                 years_in_days=years*365;
                    years_future=years+5;
                        } else {
                            enter_years();
                        }
                        }

    function enter_gender() {
        gender=confirm("Ваш пол - мужской?");
            gender?retire=62:retire=57;
                if(retire==62&&years>=retire || retire==57&&years>=retire) {
                retire_confirm="да";
                    } else{
                         retire_confirm="нет"
                     }
                        if(gender){
                         gender="мужской";
                            } else{
                                gender="женский";
                                }
                                }

     if (years!=0&&fio.length!=0){
      alert("Ваше ФИО: "+fio+"\nВаш возраст цифрами: " + years +"\nВаш возраст в днях: "+years_in_days+"\nЧерез 5 лет вам будет: "+years_future + "\nВаш пол: " + gender +"\nВы на пенсии: " + retire_confirm );} else {("");
    }
  }

